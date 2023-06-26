import axios from 'axios';

const API_KEY = '6ac0b0dbe7e3d1c37f8b66ba372308c6';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data.results;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return data;
};

export const getMovieDetails = async moveId => {
  const { data } = await axios.get(`/movie/${moveId}`);
  return data;
};

export const getMovieCredits = async moveId => {
  const { data } = await axios.get(`/movie/${moveId}/credits`);
  return data;
};

export const getMovieReviews = async moveId => {
  const { data } = await axios.get(`/movie/${moveId}/reviews`);
  return data;
};
