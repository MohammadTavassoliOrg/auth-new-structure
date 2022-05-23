const express = require("express");
const app = express();
const db = require("./src/server/db/connect-to-db")();
const config = require("config");
const router = require("./src/server/routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send("thats ok");
});

app.use('/api', router);

const PORT = config.get("PORT");
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});