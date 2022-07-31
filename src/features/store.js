import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice"
import showSlice from "./showSlice";

export default configureStore({
  reducer: {
    movie: movieSlice,
    show: showSlice,
  },
});