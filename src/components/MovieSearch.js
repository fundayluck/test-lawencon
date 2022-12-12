import { useEffect, useState } from "react"
import axios from "axios"

export default function useBookSearch(page, title) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [movie, setMovie] = useState([])
    const [hasMore, setHasMore] = useState(false)
    console.log(loading, error);
    useEffect(() => {
        setMovie([])
    }, [title])

    useEffect(() => {

        setError(false)
        let cancel
        setLoading(true)
        axios({
            method: 'GET',
            url: `https://www.omdbapi.com?apikey=715289b&s=${title}&&page=${page}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            if (res.data.Response === "True") {
                setMovie(prev => {
                    return [...new Set([...prev, ...res.data.Search.map(b => b)])]
                })
            } else if (res.Response === "False") {
                setLoading(false)
                setMovie(res.data)
            }
            setLoading(false)
            setHasMore(res.data.Search.length > 0)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [title, page])

    return { loading, error, movie, hasMore }
}