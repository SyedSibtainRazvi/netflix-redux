import React from 'react'
import { Route, Routes,} from 'react-router-dom'
import Footer from './components/common/Footer'
import MovieDetail from './components/Movie/MovieDetails'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import Movies  from './pages/Movies'
import Shows from './pages/Shows'
import ShowDetail from './components/Show/ShowDetails'

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path = "/movies" element = {<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path = "/tvshows" element = {<Shows />} />
          <Route path = "/tvshows/:tv-id" element ={<ShowDetail />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App