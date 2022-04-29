const router = require("express").Router();
const { Artist } = require("../db");
const { artistsView } = require("../views");

router.get("/", async (req, res, next) => {
  try {
    //  get all artists
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const artist = await Artist.findByPk(req.params.id);
    if (artist === null) {
      const error = new Error("No artist found");
      error.status = 404;
      throw error;
    } else {
      const nameStatement = artist.nameStatement();
    }
    res.send(nameStatement);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
