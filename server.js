const { json } = require("body-parser");
const express = require("express");
const https = require("https")
const app = express();
const fs = require("fs");

const PORT = 4001;

const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

app.use(json());

app.get("/api/test", (req, res) => {
    console.log(req.body);

    res.json({
        hello: "world"
    });
});

var server = https.createServer(options, app)

server.listen(PORT, () => {
    console.log("LISTENING ON " + PORT);
});