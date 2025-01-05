const express = require("express");
const { LOGIN, REGISTER, MOVIES } = require("../constants/path");
const {
  getAllMoviesController,
  getMovieController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
  getMovieByIdController,
  getMovieByGenreController,
} = require("../controllers/moviesController");

const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.query.genre) {
    getMovieByGenreController(req, res, next);
  } else {
    getAllMoviesController(req, res, next);
  }
});

router.get("/:movieId", getMovieByIdController);

router.post("/", createMovieController);

router.patch("/:movieId", updateMovieController);

router.delete("/:movieId", deleteMovieController);

module.exports = router;
