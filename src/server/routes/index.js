const express = require("express");
const { isLoggined } = require("../middlewares/auth");
const router = express.Router();
const authRouter = require("./auth/index");
const userRouter = require("./user/index")

router.use("/auth", authRouter);
router.use("/user", isLoggined, userRouter);

module.exports = router;