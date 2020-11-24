const express = require("express");
const https = require("https")
const app = express();

const PORT = 4001;

app.use(express.json());

app.get("/api/test", (req, res) => {
    console.log(req.body);

    res.json({
        hello: "world"
    })
});

app.listen(PORT, () => {
    console.log("LISTENING ON " + PORT);
});