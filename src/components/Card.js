import { NavLink } from "react-router-dom";

const Card = ({ movies, }) => {
    let content;
    console.log(movies);
    if (movies.Response === "False") {
        content = <div className="flex justify-center">{movies.Error}</div>
    } else {
        content = <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie, index) =>
                <div className="flex justify-center " key={index}>
                    <div className="rounded-lg shadow-lg bg-white max-w-sm bg-[#434242]" >
                        <img className="rounded-t-lg md:w-[350px] md:h-[300px] lg:w-[350px] lg:h-[400px]" src={movie.Poster} alt="" />
                        <div className="p-6">
                            <h5 className="text-[#F3EFE0] text-md font-medium mb-2">
                                {movie.Title}
                            </h5>
                            <p className="text-[#F3EFE0] mb-4">
                                {movie.Year}
                            </p>
                            <NavLink to={`/detail/${movie.imdbID}`}>
                                <button
                                    type="button" class="text-white bg-[#22A39F] hover:bg-[#22A39F] focus:ring-4 focus:outline-none focus:ring-[#22A39F] dark:focus:ring-[#22A39F] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                >
                                    Detail
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div >
    }

    return <>
        {content}
    </>

}

export default Card