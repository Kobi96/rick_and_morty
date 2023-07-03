const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/rickandmorty", router);

module.exports = app;
