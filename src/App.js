import React from 'react'
import { Route, Routes,} from 'react-router-dom'
import Banner from './components/Banner'
import MovieDetail from './components/MovieDetails'
import Home from './pages/Home'
import Movies  from './pages/Movies'

const App = () => {
  return (
    <div>
      <Banner />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path = "/movies" element = {<Movies />} />
          <Route path="/movies/:id"  exact element={<MovieDetail />} />
        </Routes>
    </div>
  )
}

export default App