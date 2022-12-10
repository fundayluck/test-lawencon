import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const AppPage = () => {
    const [title, setTitle] = useState('dragon')
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`https://www.omdbapi.com?apikey=715289b&s=${title}&page=${page}`)
            if (response.data.Response === "True") {
                setMovies(prev => [...prev, ...response.data.Search])
            } else if (response.data.Response === "False") {
                setMovies(response.data)
            }
        }
        fetch()
    }, [page, title])


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
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
        </div>
    )
}

export default AppPage