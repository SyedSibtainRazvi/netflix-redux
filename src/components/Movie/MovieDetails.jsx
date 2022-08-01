import React, { useEffect } from "react";
import truncateString from "../../helpers/truncate";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAsyncMovieDetail,
    getSelectedMovie,
    removeSelectedMovie,
} from "../../features/movieSlice"

const MovieDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const item = useSelector(getSelectedMovie)

    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(id));
        return () => {
            dispatch(removeSelectedMovie())
        }
    }, [dispatch, id])

    return (
        <>
            <div className="m-4">
                <button
                    onClick={() => navigate(-1)}
                    className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                    ⬅ Back
                </button>
                <h1 className="text-[3rem] font-bold text-white">
                    {item?.title || item?.name || item?.original_name}
                </h1>
                <img
                    className='w-[50vw] h-auto block rounded'
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                    alt={item?.title || item?.name} />
                <div className="mt-4 text-white ">
                    <h3 className="font-bold m-4">Runtime:  {item?.runtime} Minutes</h3>
                    <h4>Released: {item?.release_date}</h4>
                    <p className='w-full md:max-w-[70%] lg: max-w-50[50%] xl:max-w-[35%] text-gray-300'>
                        {truncateString(item?.overview, 200)}
                    </p>
                </div>
            </div>
        </>
    )
}

export default MovieDetail;