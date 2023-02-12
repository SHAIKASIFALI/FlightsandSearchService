const express = require("express");
const { PORT } = require("./config/serverconfig");
const setUpandStartServer = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
  });
};

setUpandStartServer();
