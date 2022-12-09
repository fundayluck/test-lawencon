import { useGetMovieListQuery } from "../api/apiSlice"

const Card = () => {
    const {
        data: movies, isLoading, isSuccess, isError, error
    } = useGetMovieListQuery()

    let content;
    if (isLoading) {
        content = <p>loading...</p>
    } else if (isSuccess) {
        content = JSON.stringify(movies)
    } else if (isError) {
        content = <p>{error}</p>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Card