import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncTvAiring, showsTop, showsAiring, fetchAsyncTopTv } from '../../features/showSlice';

import ShowCard from './ShowCard';

export const ShowRow = () => {
    const showsAir = useSelector(showsAiring);
    const showTop = useSelector(showsTop);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncTvAiring())
        dispatch(fetchAsyncTopTv())
    }, [dispatch]);

    return (
        <div>
            <>
                <h1 className='text-white font-bold md:text-xl p-4'>Shows Airing Now</h1>
                <div className='relative flex items-center group'>
                    <div
                        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {showsAir?.map((item, id) => (
                            <ShowCard key={id} item={item} />
                        ))}
                    </div>
                </div>
            </>
            <>
                <h1 className='text-white font-bold md:text-xl p-4'>Top Rated Shows</h1>
                <div className='relative flex items-center group'>
                    <div
                        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {showTop?.map((item, id) => (
                            <ShowCard key={id} item={item} />
                        ))}
                    </div>
                </div>
            </>
        </div>
    )
}
export default ShowRow;