const { check } = require("express-validator");
const expressValidator = require("express-validator");

module.exports = new class {
    registerValidator () {
        return [
            check("email")
                .isEmail()
                .withMessage("Invalid email Please try again with a valid email"),
            check("name")
                .isString()
                .withMessage("Please use a valid value for your name")
                .notEmpty()
                .withMessage("Name can't be empty, Please enter your name then try again"),
            check("password")
            .notEmpty()
            .withMessage("Password can't be empty, Please enter your password then try again")
        ]
    }
    loginValidator () {
        return [
            check("email")
                .isEmail()
                .withMessage("Invalid email Please try again with a valid email"),
            check("password")
            .notEmpty()
            .withMessage("Password can't be empty, Please enter your password then try again")
        ]
    }
}