import axios from "./axios.helper";

function searchMovies(searchQuery, page = 1) {
  return axios().get(`/search/movie?query=${searchQuery}&page=${page}`);
}

function getPopularMovies() {
  return axios().get("/movie/popular");
}

function getMovie(movieId) {
  return axios().get(`/movie/${movieId}`);
}

function getMovieTrailers(movieId) {
  return axios().get(`movie/${movieId}/videos`);
}
export { searchMovies, getPopularMovies, getMovie, getMovieTrailers };
