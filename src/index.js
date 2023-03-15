const express = require("express");
const { PORT } = require("./config/serverconfig");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/index");

const db = require("./models/index");

const { DB_SYNC } = require("./config/serverconfig");
const setUpandStartServer = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/searchservice/api", router);
  app.listen(PORT, async () => {
    if (DB_SYNC) db.sequelize.sync();
    console.log(`Server is listening at ${PORT}`);
  });
};

setUpandStartServer();
