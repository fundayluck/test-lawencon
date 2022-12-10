import { useEffect, useState } from "react"
import axios from "axios"


const Card = ({ title }) => {
    const [movies, setMovies] = useState([])
    console.log(movies);
    const [page, setPage] = useState(1)
    console.log("movie", movies);
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`https://www.omdbapi.com?apikey=715289b&s=${title}&page=${page}`)
            if (response.data.Response === 'True') {
                setMovies((prev) => [...prev, ...response.data.Search])
            } else if (response.data.Response === "False") {
                setMovies(response.data.Error)
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie, index) =>
                <div className="flex justify-center" key={index}>
                    <div className="rounded-lg shadow-lg bg-white max-w-sm" >
                        <img className="rounded-t-lg md:w-[350px] md:h-[300px] lg:w-[350px] lg:h-[400px]" src={movie.Poster} alt="" />
                        <div className="p-6">
                            <h5 className="text-gray-900 text-md font-medium mb-2">
                                {movie.Title}
                            </h5>
                            <p className="text-gray-700  mb-4">
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
            )}
        </div >

    )
}

export default Card