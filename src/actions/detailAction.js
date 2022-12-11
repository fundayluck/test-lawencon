import axios from "axios"

export const GET_DETAIL = 'GET_DETAIL'

export const getDetail = (id) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_DETAIL,
            payload: {
                loading: true,
                data: false,
                error: false
            }
        })

        //get Api
        axios({
            method: 'GET',
            url: `http://www.omdbapi.com?apikey=715289b&i=${id}`,
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: GET_DETAIL,
                    payload: {
                        loading: false,
                        data: response.data,
                        error: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        error: error.message
                    }
                })
            })
    }
}