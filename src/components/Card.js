import { useState } from "react"
import { useGetMovieListQuery } from "../api/apiSlice"

const Card = () => {
    const [title, settitle] = useState('batman')
    const [page, setPage] = useState(1)
    let params = `?apikey=715289b&s=${title}&page=${page}`
    const {
        data: movies,
        isLoading
    } = useGetMovieListQuery(params)
    console.log(movies);

    let content;
    if (isLoading) {
        content = <p>loading...</p>
    } else if (movies.Response === 'True') {
        content = movies.Search.map((movie) =>
            <div className="flex justify-center" key={movie.imdbID} >
                <div className="rounded-lg shadow-lg bg-white max-w-sm" >
                    <img className="rounded-t-lg md:w-[350px] md:h-[300px] lg:w-[350px] lg:h-[400px]" src={movie.Poster} alt="" />
                    <div className="p-6">
                        <h5 className="text-gray-900 text-md font-medium mb-2">
                            {/* {item.nama} */}
                            {movie.Title}
                        </h5>
                        <p className="text-gray-700  mb-4">
                            {/* {item.detail} */}
                            {movie.Year}
                        </p>
                        {/* <a
                            // href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-6 py-2.5 bg-[#9587E4] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            Detail
                        </a> */}
                    </div>
                </div>
            </div>
        )
    } else if (movies.Response === 'False') {
        content = <div>{movies.Error}</div>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content}
        </div>
    )
}

export default Card