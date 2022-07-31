import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAsyncMovieOrShowDetail,
    getSelectedMovieOrShow,
    removeSelectedMovieOrShow,
} from "../features/movieSlice"

const MovieDetail = () => {
    const { movieId } = useParams()
    const dispatch = useDispatch()

    const data = useSelector(getSelectedMovieOrShow)
    console.log(data);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(movieId));
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, movieId])

    return (
        <div className="movie-section" >
            {
                Object.keys(data).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    <>
                        <div className="ml-[30px] pt-[140px] h-[190px]">
                            <h1 className="text-[3rem] font-bold pb-[0.3rem] text-white">
                                {data?.title || data?.name || data?.original_name}
                            </h1>
                        </div>
                    </>
                )}
        </div>
    )
}

export default MovieDetail;