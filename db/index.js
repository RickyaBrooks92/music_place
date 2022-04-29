const db = require("./_db");
const Artist = require("./artist");
const Album = require("./album");

// 1 to many
Artist.hasMany(Album);
Album.belongsTo(Artist);

module.exports = {
  db,
  Album,
  Artist,
};
