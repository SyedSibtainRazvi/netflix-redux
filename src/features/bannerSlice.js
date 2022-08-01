import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseURL from "../Api/baseURL";
import requests from "../Api/requests";

export const fetchAsyncMoviesBanner = createAsyncThunk(
    "movies/fetchMovies",
    async () => {
        const response = await baseURL.get(`${requests.requestPopular}`);
        return response.data.results[Math.floor(Math.random() * response.data.results.length - 1)];
    }
);

const initialState = {
    loading: false,
    moviesBanner: [],
    error: ""
}

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchAsyncMoviesBanner.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchAsyncMoviesBanner.fulfilled, (state, action) => {
            state.loading = false
            state.moviesBanner = action.payload
        })
        builder.addCase(fetchAsyncMoviesBanner.rejected, (state, action) => {
            console.log("Rejected!");
            state.moviesBanner = []
            state.error = action.payload
        })
    }
})

export default bannerSlice.reducer
export const moviesBanner = (state) => state.banner.moviesBanner
