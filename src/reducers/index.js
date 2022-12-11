import { combineReducers } from 'redux'
import MovieReducer from './movie'
import DetailReducer from './detail'

export default combineReducers({
    MovieReducer,
    DetailReducer
})