const router = require("express").Router();
const { Album, Artist } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const artist = await Artist.getEverything();
    res.send(artist);
  } catch (e) {
    next(e);
  }
});
// /students/:id
router.get("/:id", async (req, res, next) => {
  try {
    //find individual album
  } catch (e) {
    next(e);
  }
});

module.exports = router;
