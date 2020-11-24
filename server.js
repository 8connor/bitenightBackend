const { json } = require("body-parser");
const express = require("express");
const app = express();

const PORT = 443;

app.use(json());

app.get("/api/test", (req, res) => {
    console.log(req);

    res.sendStatus(200);
});

app.listen(PORT, (req, res) => {
    console.log("LISTENING ON " + PORT);
});