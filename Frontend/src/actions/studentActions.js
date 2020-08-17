import { GET_STUDENTS, STUDENT_ERROR, CLEAR_FILTER, FILTER_STUDENTS, SET_CURRENT } from './types'
import axios from 'axios'

export const getStudents = () => async dispatch => {
    try {
        const res = await axios.get('http://chiragjrana.pythonanywhere.com/api/student/');
        console.log(res)
        dispatch({
            type: GET_STUDENTS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: STUDENT_ERROR,
            payload: error
        })
    }
}

export const setCurrent = (student) => async dispatch => {
    try {
        dispatch({
            type: SET_CURRENT,
            payload: student
        })
    } catch (error) {
        dispatch({
            type: STUDENT_ERROR,
            payload: error
        })
    }
}

export const addStudent = (student) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('http://chiragjrana.pythonanywhere.com/api/student/', student, config);
        console.log(res.data)
    } catch (error) {
        dispatch({
            type: STUDENT_ERROR,
            payload: error
        })
    }
}

export const filterStudents = text => {
    return ({
        type: FILTER_STUDENTS,
        payload: text
    })
}

export const examineStudent = (student) => async dispatch => {
    try {

    } catch (error) {

    }
}

export const clearFilter = () => {
    return ({
        type: CLEAR_FILTER
    })
}