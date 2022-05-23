const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
    mongoose
    .connect(config.get("db.address"))
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("could not connect"));    
};
