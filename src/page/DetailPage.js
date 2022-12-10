import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
        <div className='flex justify-center'>
            <div>{ }</div>
            <img src={detail.Poster} alt={detail.Poster} width={400} />
        </div>
    )
}

export default DetailPage