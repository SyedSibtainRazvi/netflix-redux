import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import truncateString from '../../helpers/truncate'
import { dataPopular } from '../../features/popularSlice'

const PopularDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [data, setData] = useState([])
    const getData = useSelector(dataPopular)

    const compare = () => {
        let compareData = getData.filter((movie) => {
            return movie.id == id;
        })
        setData(compareData)
    }

    useEffect(() => {
        compare()
    },[])

    return (
        <>
            {data.map((ele) => (
                <div key={ele.id}>
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
                                    src={`https://image.tmdb.org/t/p/w500/${ele?.backdrop_path}`}
                                    alt={ele?.title || ele?.name} />
                            </div>
                            <div className="mt-4 text-white ml-[5rem]">
                                <h1 className="text-[2rem] font-bold text-white">
                                    {ele?.title || ele?.name || ele?.original_name}
                                </h1>
                                <h4>Released: {ele?.release_date}</h4>
                                <br />
                                <p className=' w-full  text-gray-300'> <b>OverView : <br />
                                </b>
                                    {truncateString(ele?.overview, 200)}
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}

export default PopularDetails