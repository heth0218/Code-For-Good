import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { getStudents, filterStudents, clearFilter } from '../actions/studentActions'
import StudentItem from './StudentItem'
import { Link } from 'react-router-dom'

const Students = ({ filtered, students, getStudents, filterStudents, clearFilter }) => {
    const text = useRef('');

    useEffect(() => {
        getStudents();
    }, [])

    const onChange = (e) => {
        if (text.current.value !== "") {
            filterStudents(e.target.value)
        }
        else {
            clearFilter()
        }
    }

    const onClickClose = () => {
        text.current = ''
    }


    return (
        <div>
            <div className="container s12 m10">

                <nav className="teal darken-1" style={{
                    marginBottom: '30px'
                }}>
                    <div class="nav-wrapper">
                        <form>
                            <div class="input-field">
                                <input id="search" type="search" placeholder="Search Students.." ref={text} onChange={onChange} required />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons" onClick={onClickClose}>close</i>
                            </div>
                        </form>
                    </div>
                </nav>

            </div>
            {filtered === null ? (
                <div className="container s10 m5">
                    <div className="row">
                        {students && students.map(student =>
                            <StudentItem student={student} key={student.id} />)}
                    </div>
                </div>) : (
                    <div className="container s10 m5">
                        <div className="row">
                            {filtered.map(student =>
                                <StudentItem student={student} key={student.id} />)}
                        </div>
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    students: state.student.students,
    filtered: state.student.filtered
})


export default connect(mapStateToProps, { getStudents, filterStudents, clearFilter })(Students)
