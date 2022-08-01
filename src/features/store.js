import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";
import movieSlice from "./movieSlice"
import popularSlice from "./popularSlice";
import showSlice from "./showSlice";

export default configureStore({
  reducer: {
    banner: bannerSlice,
    movie: movieSlice,
    show: showSlice,
    popular: popularSlice,
  },
});