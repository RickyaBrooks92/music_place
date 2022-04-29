const Sequelize = require("sequelize");
const db = require("./_db");
const Album = require("./album");

const Artist = db.define("artist", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

Artist.getEverything = async function () {
  const artist = await Artist.findall({
    include: Album,
  });
};

// instance methods
Artist.prototype.nameStatement = function () {
  return "This artist is ${this.name}";
};

module.exports = Artist;
