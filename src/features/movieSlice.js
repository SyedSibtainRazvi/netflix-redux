import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseURL from "../Api/baseURL";
import requests from "../Api/requests";


export const fetchAsyncMovieDetail = createAsyncThunk(
    "movies/fetchAsyncMovie",
    async (movie_id) => {
      const response = await baseURL.get(`movie/${movie_id}?api_key=592508130f6e9c513764df62060036ae&language=en-US`);
      return response.data;
    }
  );

//Fetch Trending
export const fetchAsyncTrending = createAsyncThunk(
    "movies/fetchTrendingMovies",
    async () => {
        const response = await baseURL.get(`${requests.requestTrending}`);
        return response.data.results
    }
)

//Fetch TopRated
export const fetchAsyncToprated = createAsyncThunk(
    "movies/fetchToprated",
    async () => {
        const response = await baseURL.get(`${requests.requestTopRated}`);
        return response.data.results
    }
)

//Fetch Horror
export const fetchAsyncHorror = createAsyncThunk(
    "movies/fetchHorror",
    async () => {
        const response = await baseURL.get(`${requests.requestHorror}`);
        return response.data.results
    }
)




const initialState = {
    moviesTrending: [],
    moviesToprated: [],
    moviesHorror: [],
    selectMovie: {}
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAsyncTrending.fulfilled, (state, action) =>{
            state.moviesTrending = action.payload
        })
        builder.addCase(fetchAsyncToprated.fulfilled, (state, action) =>{
            state.moviesToprated = action.payload
        })
        builder.addCase(fetchAsyncHorror.fulfilled, (state, action) =>{
            state.moviesHorror = action.payload
        })
        builder.addCase(fetchAsyncMovieDetail.fulfilled, (state, action) => {
            return {...state, selectMovie : action.payload}
        })
    }
})

export default movieSlice.reducer;

export const moviesTrending = (state) => state.movie.moviesTrending
export const moviesToprated = (state) => state.movie.moviesToprated
export const moviesHorror = (state) => state.movie.moviesHorror

export const getSelectedMovie = (state) => state.movie.selectMovie