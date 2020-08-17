import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrent } from '../actions/studentActions'

const EmployeeItem = ({ student, setCurrent }) => {

    const { name, position, image } = student
    console.log(name, position, image)

    const setCurr = () => {
        setCurrent(student)
    }

    return (
        <div className="column" float="left" width="50%">
            <div className="col s6 m4">
                <div className="card">
                    <div className="center" style={{ padding: '5px' }}>
                        <img className="round-img" width="200" height='200' src={image} />
                    </div>
                    <div class="card-content">
                        <span>
                            <h4>
                                <span>{name}</span>&nbsp;&nbsp;
                            <Link to="/direction" class="btn-floating waves-effect waves-light teal" onClick={setCurr} > <i class="material-icons">keyboard_arrow_right</i></Link>
                            </h4>
                        </span>
                        <p>{position}</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default connect(null, { setCurrent })(EmployeeItem)
