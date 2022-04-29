const Sequelize = require("sequelize");
const db = require("./_db");

const Album = db.define("album", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Album;
