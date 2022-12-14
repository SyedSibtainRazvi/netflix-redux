import React, { useEffect } from "react";
import truncateString from "../../helpers/truncate";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAsyncShowDetail,
    getSelectedShow,
} from "../../features/showSlice"

const ShowDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const item = useSelector(getSelectedShow)
    const load = useSelector((state) => state.show.loading)
    console.log(item);

    useEffect(() => {
        dispatch(fetchAsyncShowDetail(id));
    }, [dispatch, id])

    return (
        <>
            {load ? (
                <div className="flex m-auto justify-center">
                    <h1 className='text-white text-4xl'>Loading.....</h1>
                </div>
            ) : (
                <>
                    <div className="m-4">
                        <button
                            onClick={() => navigate(-1)}
                            className='bg-red-600 px-6 py-2 m-4 rounded cursor-pointer text-white'>
                            ⬅ Back
                        </button>
                        <div className="md:flex justify-around m-4">
                            <div>
                                <img
                                    className='w-[40vw] h-auto block rounded'
                                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                                    alt={item?.title || item?.name} />
                            </div>
                            <div className="mt-4 text-white ml-[5rem]">
                                <h1 className="text-[2rem] font-bold text-white">
                                    {item?.title || item?.name || item?.original_name}
                                </h1>
                                <h4>Released: {item?.first_air_date}</h4>
                                <br />
                                <p className=' w-full  text-gray-300'> <b>OverView : <br />
                                </b>
                                    {truncateString(item?.overview, 200)}
                                </p>
                                <br />
                                <h3 className="font-bold">Status:  {item?.status}</h3>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </>
    )
}

export default ShowDetail;