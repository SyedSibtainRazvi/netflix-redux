import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Home from '../src/pages/Home'
import Movies from '../src/pages/Movies'
import Shows from '../src/pages/Shows'
import Popular from '../src/pages/Popular'

import MovieDetail from '../src/components/movie/MovieDetails'
import ShowDetail from '../src/components/show/ShowDetails'
import PopularDetails from '../src/components/popular/PopularDetails'




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" exact element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="tv" element={<Shows />} />
        <Route path="tv/:id" element={<ShowDetail />} />
        <Route path="popular" element={<Popular />} />
        <Route path="popular/:id" element={<PopularDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App