const express = require("express");
const { PORT } = require("./config/serverconfig");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/index");

const setUpandStartServer = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api", router);
  app.listen(PORT, async () => {
    console.log(`Server is listening at ${PORT}`);
  });
};

setUpandStartServer();
