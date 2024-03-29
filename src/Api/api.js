import  axios  from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '995c4f7d7be8ab0a66ce904386d660d2';

export async function fetchTrending ({abortController}) {

  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`, {
    signal: abortController.signal,
  })

  return response.data;
}

export async function fetchMovieDetails (movieId) {

  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`)

  return response.data;
}

export async function fetchSearchMovies (searchMovie) {

  const response = await axios.get(`search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${searchMovie}`)
  return response.data;
}

export async function fetchReviews (movieId) {

  const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
  return response.data;
}

export async function fetchCast(movieId) {
  const response = await axios.get(`movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`)
  return response.data;
}