const key = '592508130f6e9c513764df62060036ae';


const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  fetchTvTop: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  fetchTvAiring: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
  fetchTvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,

};

export default requests;