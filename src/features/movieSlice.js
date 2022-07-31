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

//Fetch Trending
export const fetchAsyncTrending = createAsyncThunk(
    "movies/fetchTrendingMovies",
    async () => {
        const response = await baseURL.get(`${requests.requestTrending}`);
        console.log("hello");
        return response.data.results
    }
)




const initialState = {
    moviesBanner: [],
    moviesTrending: [],
    selectMovie: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectMovie: (state) => {
            state.selectMovie = {};
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
    }
})

export default movieSlice.reducer;
export const moviesBanner = (state) => state.movie.moviesBanner
export const moviesTrending = (state) => state.movie.moviesTrending
