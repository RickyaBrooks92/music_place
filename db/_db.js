const Sequelize = require("sequelize");

//set up postgres
const db = new Sequelize("postgres://localhost/music_app", {
  logging: false,
  define: {
    timestamps: false,
  },
});

module.exports = db;
