import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import { AiTwotoneStar } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

const DetailPage = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()
    console.log(detail);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`http://www.omdbapi.com?apikey=715289b&i=${id}`)
            setDetail(response.data)
        }
        fetch()
    }, [id])
    return (
        <div className='flex flex-col mt-5'>
            <NavLink to='/'>
                <BiArrowBack className='fixed ml-10 text-[50px] text-[#F3EFE0] cursor-pointer' />
            </NavLink>
            <div className='flex justify-between mx-[250px]'>
                <div className='flex flex-col'>
                    <div className='flex justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-2xl text-[#F3EFE0]'>{detail.Title}</h1>
                            <ul className='flex'>
                                <li className='mr-7 text-[#F3EFE0]'>{detail.Year}</li>
                                <li className='mr-7 list-disc text-[#F3EFE0]'>{detail.Rated}</li>
                                <li className='mr-5 list-disc text-[#F3EFE0]'>{detail.Runtime}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center'>
                    <AiTwotoneStar className='text-[30px] text-[#F5C518] mr-1' />
                    <div>
                        <div className='flex'>
                            <h3 className='flex font-bold text-[#F3EFE0] mr-1'>{detail.imdbRating}</h3>
                            <p className='text-[#F3EFE0] mr-1'>/ 10</p>
                        </div>
                        <h3 className='text-[#F3EFE0]'>{detail.imdbVotes} votes</h3>
                    </div>
                </div>
            </div >
            <div className='flex justify-center mt-2'>
                <img
                    src={detail.Poster}
                    alt=''
                    className='w-[250px] items-center rounded-md'
                />
            </div>
            <div className='bg-[#434242] h-[169px] rounded-t-md mt-6 mx-[230px]'>
                <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 mx-4'>
                    <div className='col-span-1 text-[#F3EFE0]'>Genre</div>
                    <div className='col-span-2 text-[#F3EFE0]'>: {detail.Genre}</div>
                    <div className='col-span-1 text-[#F3EFE0]'>Language</div>
                    <div className='col-span-2 text-[#F3EFE0]'>: {detail.Language}</div>
                    <div className='col-span-1 text-[#F3EFE0]'>Actors</div>
                    <div className='col-span-2 text-[#F3EFE0]'>: {detail.Actors}</div>
                    <div className='col-span-1 text-[#F3EFE0]'>Director</div>
                    <div className='col-span-2 text-[#F3EFE0]'>: {detail.Director}</div>
                    <div className='col-span-1 text-[#F3EFE0]'>Plot</div>
                    <div className='col-span-2 text-[#F3EFE0]'>: {detail.Plot}</div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage