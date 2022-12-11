import axios from "axios"

export const GET_MOVIE = 'GET_MOVIE'

export const getMovie = (params) => {
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
        axios({
            method: 'GET',
            url: `https://www.omdbapi.com?apikey=715289b&s=batman&&page=${params}`,
            timeout: 120000
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
                dispatch({
                    type: GET_MOVIE,
                    payload: {
                        loading: false,
                        data: false,
                        error: error.message
                    }
                })
            })
    }
}