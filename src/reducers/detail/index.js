import { GET_DETAIL } from "../../actions/detailAction"

const initialState = {
    getDetailMovieResult: false,
    getDetailMovieLoading: false,
    getDetailMovieError: false
}

const detail = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL:
            return {
                ...state,
                getDetailMovieResult: action.payload.data,
                getDetailMovieLoading: action.payload.loading,
                getDetailMovieError: action.payload.error.message
            }
        default:
            return state
    }
}

export default detail