import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Movies from '../pages/Movies'
import MovieDetail from '../components/movie/MovieDetails'
import Shows from '../pages/Shows'
import ShowDetail from '../components/show/ShowDetails'
import Popular from '../pages/Popular'
import PopularDetails from '../components/popular/PopularDetails'
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movies" exact element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetail />} />
                <Route path="tv" element={<Shows />} />
                <Route path="tv/:id" element={<ShowDetail />} />
                <Route path="popular" element={<Popular />} />
                <Route path="popular/:id" element={<PopularDetails />} />
            </Routes>
        </>
    )
}

export default AppRoutes