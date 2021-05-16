const express = require("express");
const config = require("config");
const app = express();

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;
