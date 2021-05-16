const express = require("express");

const home = require("../routes/home");
const shops = require("../routes/shops");
const error = require("../middleware/error");

module.exports = (app) => {
  app.use(express.json());

  app.use("/api/shops", shops);

  app.use("/home", home);
  app.use(error);
};
