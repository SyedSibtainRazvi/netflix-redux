import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAsyncMovieOrShowDetail,
    getSelectedMovieOrShow,
    removeSelectedMovieOrShow,
} from "../features/movieSlice"

const MovieDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const item = useSelector(getSelectedMovieOrShow)

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(id));
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, id])

    return (
        <div className="movie-section" >
            <>
                <div className="ml-[30px] pt-[140px] h-[190px]">
                    <h1 className="text-[3rem] font-bold pb-[0.3rem] text-white">
                        {item?.title || item?.name || item?.original_name}
                    </h1>
                </div>
            </>
        </div>
    )
}

export default MovieDetail;