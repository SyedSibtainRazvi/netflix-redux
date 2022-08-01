import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseURL from "../Api/baseURL";
import requests from "../Api/requests";


export const fetchAsyncShowDetail = createAsyncThunk(
    "shows/fetchAsyncShowDetail",
    async (tv_id) => {
      const response = await baseURL.get(`tv/${tv_id}?api_key=592508130f6e9c513764df62060036ae`);
      return response.data;
    }
  );
  //Fetch TV Airing
  export const fetchAsyncTvAiring = createAsyncThunk(
      "shows/fetchTvAiring",
      async () => {
          const response = await baseURL.get(`${requests.fetchTvAiring}`);
          return response.data.results.slice(2,9)
      }
  )
// Fetch Tv Top
export const fetchAsyncTopTv = createAsyncThunk(
    "shows/fetchTvTop",
    async () => {
        const response = await baseURL.get(`${requests.fetchTvTop}`);
        return response.data.results.slice(2)
    }
)


const initialState = {
    showsAiring: [],
    showsTop: [],
    selectShow: {},
}


const showSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAsyncTopTv.fulfilled, (state, action) => {
            state.showsTop = action.payload
        })
        builder.addCase(fetchAsyncTvAiring.fulfilled, (state, action) => {
            state.showsAiring = action.payload
        })
        builder.addCase(fetchAsyncShowDetail.fulfilled, (state, action) => {
            return {...state, selectShow : action.payload}
        })
    }
})

export default showSlice.reducer

export const showsTop = (state) => state.show.showsTop
export const showsAiring = (state) => state.show.showsAiring

export const getSelectedShow = (state) => state.show.selectShow
