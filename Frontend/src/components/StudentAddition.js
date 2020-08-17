import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import M from "materialize-css/dist/js/materialize.min.js"
import { addStudent } from '../actions/studentActions'

const StudentAddition = ({ user, addStudent }) => {

    const [student, setStudent] = useState({
        name: "",
        section: "",
        school: "",
        gender: "",
        academic: "",
        observed: "",
        assess: "",
    })
    const {
        name,
        section,
        school,
        gender,
        academic,
        observed,
        assess,
    } = student

    const onChange = (e) =>
        setStudent({ ...student, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        console.log(
            name,
            section,
            school,
            gender,
            academic,
            observed,
            assess,
        )
        e.preventDefault()
        addStudent({
            name,
            section,
            school,
            gender,
            academic,
            observed,
            assess,
        })
        M.toast({ html: ` ${name}, you have successfully been registered ` })
    }

    return (
        <div className="container">
            {!user ? (
                <h2>Please Login to avail this facility</h2>
            ) : (
                    <div className="form-container">
                        <h2>
                            <span className="teal-text">Add Student</span>
                        </h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="section">Section</label>
                                <input
                                    type="text"
                                    name="section"
                                    value={section}
                                    onChange={onChange}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="school">School</label>
                                <input
                                    type="text"
                                    name="school"
                                    value={school}
                                    onChange={onChange}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={gender}
                                    onChange={onChange}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="academic">Acedemic Fluency</label>
                                <input
                                    type="text"
                                    name="academic"
                                    value={academic}
                                    onChange={onChange}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="observed">Observed Peer</label>
                                <input
                                    type="text"
                                    name="observed"
                                    value={observed}
                                    onChange={onChange}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="assess">Assessment Group No.</label>
                                <input
                                    type="text"
                                    name="assess"
                                    value={assess}
                                    onChange={onChange}
                                ></input>
                            </div>
                            <input
                                type="submit"
                                value="Add Student"
                                className="btn waves-effect waves-light teal btn-block"
                                style={{ marginBottom: '100px' }}
                            />
                        </form>
                    </div>
                )}
        </div>
    )
}


const mapStateToProps = (state) => ({
    user: state.user.user,
})

export default connect(mapStateToProps, { addStudent })(StudentAddition)
