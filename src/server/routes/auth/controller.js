const controller = require("../controller")
const _ = require("lodash");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const config = require("config");
module.exports = new (class extends controller {
    async register (req, res) {
        let user = await this.User.findOne({email: req.body.email});
        if(user) {
            return this.response({
                res: res,
                code:400,
                message: "this user already registered"
            });
        };
        const {name, email, password} = req.body;
        user = new this.User({name, email, password});
        //user = new this.User(_.pick(req.body, ["name", "email", "password"]));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        this.response({
            res: res,
            message: "registered successfuly",
            data: _.pick(user, ["_id", "name", "email"])
        });
    };

    async login (req, res) {
        const user = await this.User.findOne({email: req.body.email});
        if (!user) {
            return this.response({
                res: res,
                code: 400,
                message: "invalid email or password"
            });
        }
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) {
            return this.response({
                res: res,
                message: "invalid email or password"
            });
        };
        const token = jwt.sign({_id: user.id}, config.get("jwtPrivateKey"));
        this.response({
            res: res,
            message: "successfuly logged in",
            data: {
                token
            }
        });
    };
})();