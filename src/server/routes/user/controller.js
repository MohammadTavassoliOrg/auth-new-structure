const controller = require("../controller")
const _ = require("lodash");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const config = require("config");
module.exports = new (class extends controller {
    async dashboard (req, res) {
        res.send("user dashboard")
    };

    async myProfile (req, res) {
        this.response({
            res: res,
            data: _.pick(req.user, ["name", "email"])
        });
    };
    async getUsers () {

    }
})(); 