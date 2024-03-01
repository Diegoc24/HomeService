const express = require("express")
const server = express()
const morgan = require("morgan")
const router = require("../src/routes/index")
const relations = require("./database/relations")
const cors = require("cors")
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"))
server.use(cors({
  origin: "*",
  credentials: true,
  methods: "GET, POST, OPTIONS, PUT, DELETE",
  headers: "Origin, X-Requested-With, Content-Type, Accept"
}));


module.exports = server;