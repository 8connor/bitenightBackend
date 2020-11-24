const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const PORT = 4001;

require("dotenv").config();

const key = process.env.API_KEY;

const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.get("/api/grabKey", (req, res) => {
    console.log(key)
    res.json({
        access: key
    });
});

const server = https.createServer(options, app)

server.listen(PORT, () => {
    console.log("LISTENING ON " + PORT);
});