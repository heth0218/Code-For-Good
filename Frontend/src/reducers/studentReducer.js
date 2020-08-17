import { STUDENT_ERROR, GET_STUDENTS, FILTER_STUDENTS, CLEAR_FILTER, SET_CURRENT } from '../actions/types';
import heth from '../photos/heth.jpeg'
import jash from '../photos/jash.jpeg'
import jenish from '../photos/jenish.jpeg'
import mihir from '../photos/mihir.jpeg'

const initialState = {
    students: [
        {
            id: 1,
            name: "Heth Gala",
            position: "Computer Engineer",
            image: heth
        },
        {
            id: 2,
            name: "Jash Shah",
            position: "Django Master",
            image: jash
        },
        {
            id: 3,
            name: "Jenish Hirpara",
            position: "Flutter Master",
            image: jenish
        },
        {
            id: 4,
            name: 'Mihir Shah',
            position: 'Android Master',
            image: mihir
        }
    ],
    error: null,
    filtered: null,
    current: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case STUDENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case FILTER_STUDENTS:
            return {
                ...state,
                filtered: state.students.filter(student => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return student.name.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        default:
            return {
                ...state,
            }
    }
}