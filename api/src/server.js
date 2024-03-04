const express = require("express")
const server = express()
const morgan = require("morgan")

const relations = require("./database/relations")
const cors = require("cors")
const router = require("../src/routes/index")
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"))
server.use(cors({
  origin: "*",
  credentials: true,
  methods: "GET, POST, OPTIONS, PUT, DELETE",
  headers: "Origin, X-Requested-With, Content-Type, Accept"
}));

server.use("/", router)

module.exports = server;