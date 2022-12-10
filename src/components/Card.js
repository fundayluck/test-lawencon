const Card = ({ movies }) => {
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

                        </div>
                    </div>
                </div>
            )}
        </div >
    }

    return <div>{content}</div>
}

export default Card