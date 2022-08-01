import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseURL from "../Api/baseURL";
import requests from "../Api/requests";

export const fetchAsyncPopular = createAsyncThunk(
    "popular/fetchMoviesPopular",
    async () => {
        const response = await baseURL.get(`${requests.requestPopular}`)
        return response.data.results;
    }
);

const initialState = {
    loading: false,
    dataPopular: [],
    error: ""
}

const popularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchAsyncPopular.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchAsyncPopular.fulfilled, (state, action) => {
            state.loading = false
            state.dataPopular = action.payload
        })
        builder.addCase(fetchAsyncPopular.rejected, (state, action) => {
            console.log("Rejected!");
            state.dataPopular = []
            state.error = action.payload
        })
    }
})

export default popularSlice.reducer
export const dataPopular = (state) => state.popular.dataPopular
