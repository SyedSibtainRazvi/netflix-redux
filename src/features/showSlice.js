import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseURL from "../Api/baseURL";
import requests from "../Api/requests";



//Fetch Tv Top
export const fetchAsyncTopTv = createAsyncThunk(
    "shows/fetchTvTop",
    async () => {
        const response = await baseURL.get(`${requests.fetchTvTop}`);
        return response.data.results
    }
)

//Fetch TV Airing
export const fetchAsyncTvAiring = createAsyncThunk(
    "shows/fetchTvAiring",
    async () => {
        const response = await baseURL.get(`${requests.fetchTvAiring}`);
        return response.data.results
    }
)


const initialState = {
    showsTop: [],
    showsAiring: [],
}


const showSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchAsyncTopTv.fulfilled, (state, action) => {
            state.showsTop = action.payload
        })
        builder.addCase(fetchAsyncTvAiring.fulfilled, (state, action) => {
            state.showsAiring = action.payload
        })
    }
})

export default showSlice.reducer

export const showsTop = (state) => state.show.showsTop
export const showsAiring = (state) => state.show.showsAiring