import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAsyncMovieDetail,
    getSelectedMovie,
} from "../../features/movieSlice"

const MovieDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const item = useSelector(getSelectedMovie)

    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(id));
    }, [dispatch, id])

    return (
        <>
            <div className="" >
                <div>
                    <h1 className="text-[3rem] font-bold pb-[0.3rem] text-white">
                        {item?.title || item?.name || item?.original_name}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default MovieDetail;