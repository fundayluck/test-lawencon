import axios from "axios"

export const GET_MOVIE = 'GET_MOVIE'

export const getMovie = (title, page) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_MOVIE,
            payload: {
                loading: true,
                data: false,
                error: false
            }
        })

        //get Api
        let cancel
        axios({
            method: 'GET',
            url: `https://www.omdbapi.com?apikey=715289b&s=${title}&page=${page}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then((response) => {
                dispatch({
                    type: GET_MOVIE,
                    payload: {
                        loading: false,
                        data: response.data,
                        error: false
                    }
                })
            })
            .catch((error) => {
                if (axios.isCancel(error)) return
                dispatch({
                    type: GET_MOVIE,
                    payload: {
                        loading: false,
                        data: false,
                        error: error.message
                    }
                })
            })
        return () => cancel()
    }
}