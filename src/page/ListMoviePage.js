import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../actions/movieAction'
import Loader from '../components/Loader'



const AppPage = () => {
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const {
        getListMovieResult,
        getListMovieLoading,
        // getListMovieError
    } = useSelector((state) => state.MovieReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovie(page))
    }, [dispatch, page])

    useEffect(() => {
        const fetch = async () => {
            const response = await getListMovieResult
            if (response.Response === "True") {
                setMovies((prev) => {
                    return [...prev, ...response.Search]
                })
            } else if (response.Response === "False") {
                setMovies(response)
            }
        }
        fetch()
    }, [getListMovieResult])


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {

            setPage((prev) => prev + 1);
        }
    };

    const filteredMovies = movies.filter
        ? movies.filter(
            (item) =>
                (item.Title &&
                    item.Title.toLowerCase().includes(title.toLowerCase())) ||
                (item.Title &&
                    item.Year.toLowerCase().includes(title.toLowerCase()))

        )
        : []



    return (
        <div className='flex flex-col items-center px-10 bg-[#222222]'>
            <h1 className='font-bold text-[50px] mb-2 text-[#F3EFE0] underline'>Batman Movie Collection's</h1>
            <input
                className='p-2 mb-4 border-2 rounded-md '
                placeholder='Search By Title or Year'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Card movies={filteredMovies} />
            {getListMovieLoading && <Loader />}
        </div>
    )
}

export default AppPage