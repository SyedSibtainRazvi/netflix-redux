import React, { useEffect } from "react";
import MovieList from "../components/MovieList";

import { useDispatch } from "react-redux";
import {
  fetchAsyncTrending,
} from "../features/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncTrending());
  }, [dispatch]);
  return (
    <div>
      <div className="text-white">Hello</div>
      <MovieList />
    </div>
  );
};

export default Home;