const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
require("dotenv").config();
const { PORT = 3001 } = process.env;
/* const {} = require("../db.js"); */

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});
