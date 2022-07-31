import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseURL from "../Api/baseURL";
import requests from "../Api/requests";

// Banner
export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchMovies",
    async () => {
        const response = await baseURL.get(`${requests.requestPopular}`);
        return response.data.results[5];
    }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (movie_id) => {
      const response = await baseURL.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=592508130f6e9c513764df62060036ae&language=en-US`);
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
    moviesBanner: [],
    moviesTrending: [],
    moviesToprated: [],
    moviesHorror: [],
    selectMovieOrShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchAsyncMovies.pending, state => {
            console.log("Fetch Working");
        })
        builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
            state.moviesBanner = action.payload
        })
        builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
            console.log("Rejected!");
        })
        builder.addCase(fetchAsyncTrending.fulfilled, (state, action) =>{
            state.moviesTrending = action.payload
        })
        builder.addCase(fetchAsyncToprated.fulfilled, (state, action) =>{
            state.moviesToprated = action.payload
        })
        builder.addCase(fetchAsyncHorror.fulfilled, (state, action) =>{
            state.moviesHorror = action.payload
        })
        builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
            return {...state, selectMovieOrShow : action.payload}
        })
    }
})

export default movieSlice.reducer;
export const moviesBanner = (state) => state.movie.moviesBanner

export const moviesTrending = (state) => state.movie.moviesTrending
export const moviesToprated = (state) => state.movie.moviesToprated
export const moviesHorror = (state) => state.movie.moviesHorror

export const getSelectedMovieOrShow = (state) => state.movie.selectMovieOrShow
export const { removeSelectedMovieOrShow} = movieSlice.actions