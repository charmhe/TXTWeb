const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const sms = require("./app/apis/sms");

const app = express();
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/sms", sms);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);