import React from 'react';
import { Link } from "react-router-dom";

const ShowCard = ({ item }) => {
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <Link to={`/tv/${item.id}`}>
        <img
          className='w-full h-auto block'
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title || item?.name}
        />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {item?.title || item?.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ShowCard;