import { GET_MOVIE } from "../../actions/movieAction"

const initialState = {
    getListMovieResult: false,
    getListMovieLoading: false,
    getListMovieError: false
}

const movie = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state,
                getListMovieResult: action.payload.data,
                getListMovieLoading: action.payload.loading,
                getListMovieError: action.payload.error.message
            }
        default:
            return state
    }
}

export default movie