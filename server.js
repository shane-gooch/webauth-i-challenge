const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const RoutersRouter = require("./routes/route-routes.js");
const knexConnection = require("./data/db-config.js");

const server = express();

const sessionOptions = {
  name: "bestYouEverHad",
  secret: process.env.COOKIE_SECRET || "lock it up",
  cookie: {
    secure: process.env.COOKIE_SECRET || false,
    maxAge: 6.048e8,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true,
  store: new KnexSessionStore({
    knex: knexConnection,
    createtable: true,
    clearInterval: 6.048e8
  })
};

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(session(sessionOptions));

server.use("/api/", RoutersRouter);

module.exports = server;
