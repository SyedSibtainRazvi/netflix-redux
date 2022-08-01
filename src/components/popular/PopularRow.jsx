import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataPopular, fetchAsyncPopular } from '../../features/popularSlice';
import PopularCard from '../popular/PopularCard';

const PopularRow = () => {
    const moviesTop = useSelector(dataPopular)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncPopular())
    }, [dispatch])
    return (
        <div className='mb-[10rem]'>
            <h1 className='text-white font-bold md:text-xl p-4'>Popular Movies</h1>
            <div className='relative flex items-center group'>
                <div
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {moviesTop?.map((item, id) => (
                        <PopularCard key={id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularRow