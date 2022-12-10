import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Loader from '../components/Loader'


const AppPage = () => {
    const [title, setTitle] = useState('batman')
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    console.log(loading);
    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(`https://www.omdbapi.com?apikey=715289b&s=${title}&page=${page}`)
            if (response.data.Response === "True") {
                setMovies((prev) => {
                    return [...prev, ...response.data.Search]
                })
            } else if (response.data.Response === "False") {
                setMovies(response.data)
            }
        }, 1500)
        setLoading(false)
    }, [page, title])


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true)
            setPage((prev) => prev + 1);
        }
    };
    return (
        <div className='flex flex-col items-center px-5 bg-[#222222]'>
            <h1 className='font-bold text-[50px] mb-2 text-[#F3EFE0]'>Movie Collection</h1>
            {/* <input
                className='p-2 mb-2 border-2'
                placeholder='Search by title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /> */}
            <Card movies={movies} />
            {loading && <Loader />}
        </div>
    )
}

export default AppPage