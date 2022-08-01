import React from 'react'
import { useEffect } from 'react';
import { moviesTrending, fetchAsyncTrending, moviesToprated, fetchAsyncToprated, moviesHorror, fetchAsyncHorror } from '../../features/movieSlice';
import { useSelector, useDispatch } from 'react-redux';

import MovieCard from './MovieCard';


export const MovieRow = () => {
    const moviesTrend = useSelector(moviesTrending);
    const moviesTop = useSelector(moviesToprated);
    const moviesHor = useSelector(moviesHorror)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAsyncTrending())
        dispatch(fetchAsyncToprated())
        dispatch(fetchAsyncHorror())
    }, [dispatch]);

    return (
        <div>
            <>
                <h1 className='text-white font-bold md:text-xl p-4'>Trending Movies</h1>
                <div className='relative flex items-center group'>
                    <div
                        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {moviesTrend?.map((item, id) => (
                            <MovieCard key={id} item={item} />
                        ))}
                    </div>
                </div>
            </>
            <>
                <h1 className='text-white font-bold md:text-xl p-4'>Top Rated Movies</h1>
                <div className='relative flex items-center group'>
                    <div
                        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {moviesTop?.map((item, id) => (
                            <MovieCard key={id} item={item} />
                        ))}
                    </div>
                </div>
            </>
            <>
                <h1 className='text-white font-bold md:text-xl p-4'>Horror Movies</h1>
                <div className='relative flex items-center group'>
                    <div
                        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {moviesHor?.map((item, id) => (
                            <MovieCard key={id} item={item} />
                        ))}
                    </div>
                </div>
            </>
        </div>
    )
}
 export default MovieRow
