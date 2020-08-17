import { combineReducers } from 'redux';
import userReducer from './userReducer'
import studentReducer from './studentReducer'

export default combineReducers({
    user: userReducer,
    student: studentReducer
})