import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAsyncShowDetail,
    getSelectedShow,
} from "../../features/showSlice"

const ShowDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const item = useSelector(getSelectedShow)

    useEffect(() => {
        dispatch(fetchAsyncShowDetail(id));
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

export default ShowDetail;