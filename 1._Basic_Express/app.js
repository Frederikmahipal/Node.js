//server setup
const express = require("express");
const app = express();

//callback
app.get("/", (request, response) => {
    response.send({ message: "1st route created." });
});

app.listen(8080);