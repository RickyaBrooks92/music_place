const express = require("express");
const app = express();
const PORT = 8089;
const morgan = require("morgan");
const artistRouter = require("./routes/artists");
const albumRouter = require("./routes/albums");
const { db } = require("./db"); // db the folder if you don't provide a filename, it will look automatically for index.js

const setup = async () => {
  try {
    app.use(morgan("dev"));

    app.use("/artist", artistRouter);

    app.use((err, req, res) => {
      res.status(404).send("Nothing as found");
    });

    app.use((err, req, res) => {
      const status = err.status || 500;
      res.status(status).send(err.message);
    });

    await db.sync();
  } catch (e) {
    console.log(e);
  }
};

setup();
