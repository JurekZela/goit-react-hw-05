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