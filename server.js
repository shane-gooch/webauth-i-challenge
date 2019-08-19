const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

const RoutersRouter = require("./routes/route-routes.js");

server.use("/api/", RoutersRouter);

module.exports = server;
