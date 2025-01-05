const { Movies } = require("../model/dbSchema");
const getAllMovies = async () => {
  try {
    const movies = await Movies.find();
    return movies;
  } catch (e) {
    throw e;
  }
};
const getMovieById = async (movieId) => {
  // logic to get movie by id
  console.log("getMovieById");
};

const getMovieByGenre = async (genre) => {
  // logic to get movie by id
  console.log("getMovieByGenre");
};

const createMovie = async (movie) => {
  // logic to get movie by id
  console.log("createMovie");
};

const updateMovie = async (movieId, data) => {
  // logic to get movie by id
  console.log("updateMovie");
};

const deleteMovie = async (movieId) => {
  // logic to get movie by id
  console.log("deleteMovie");
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByGenre,
  createMovie,
  updateMovie,
  deleteMovie,
};
