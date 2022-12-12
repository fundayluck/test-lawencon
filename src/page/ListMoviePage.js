import {
    useCallback,
    // useEffect,
    useRef,
    useState
} from 'react'
import Card from '../components/Card'
// import { useDispatch, useSelector } from 'react-redux'
// import { getMovie } from '../actions/movieAction'
import MovieSearch from '../components/MovieSearch'
import Loader from '../components/Loader'



const AppPage = () => {
    const [title, setTitle] = useState('spider')
    // const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    // // const [hashMore, setHashMore] = useState(false)

    // const {
    //     getListMovieResult,
    //     getListMovieLoading,
    //     // getListMovieError
    // } = useSelector((state) => state.MovieReducer)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getMovie(title, page))
    // }, [dispatch, title, page])

    // useEffect(() => {
    //     setMovies([])
    // }, [title])

    // useEffect(() => {
    //     const fetch = async () => {
    //         const response = await getListMovieResult
    //         if (response.Response === "True") {
    //             setMovies(prev => {
    //                 return [...new Set([...prev, ...response.Search.map(b => b)])]
    //             })
    //         } else if (response.Response === "False") {
    //             setMovies(response)
    //         }
    //     }
    //     fetch()
    // }, [getListMovieResult])

    const {
        movie,
        hasMore,
        loading,
        error
    } = MovieSearch(page, title)

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prev => prev + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    function handleSearch(event) {
        setTitle(event.target.value)
        setPage(1)
    }



    return (
        <div className='flex flex-col items-center px-10 bg-[#222222]'>
            <h1 className='font-bold text-[50px] mb-2 text-[#F3EFE0] underline'>Movie Collection's</h1>
            <input
                className='p-2 mb-4 border-2 rounded-md '
                placeholder='Search By Title'
                type='text'
                onChange={handleSearch}
            />
            <Card movies={movie} lastBookElementRef={lastBookElementRef} error={error} />
            {loading && <Loader />}
        </div>
    )
}

export default AppPage