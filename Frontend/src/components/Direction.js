import React from 'react'
import { Link } from 'react-router-dom'

const studentForm = () => {
    return (
        <section className="section section-icons center">
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 offset-m1"  >
                        <Link to='/questions'>
                            <div className="card-panel grey lighten-5 waves-effect waves-light" style={{ height: '250px', marginTop: '100px' }}>
                                <i className="fa fa-user fa-3x teal-text text-darken-2"></i>
                                <h5 className="grey-text text-darken-4">Student Questionnaire</h5>
                                <p className="teal-text">Examine the student</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col s12 m4 offset-m2">
                        <Link to='/chart'>
                            <div className="card-panel grey lighten-5 waves-effect waves-light" style={{ height: '250px', marginTop: '100px' }}>
                                <i className="fa fa-chart-pie fa-3x teal-text text-darken-2"></i>
                                <h5 className="grey-text text-darken-4">Analysis</h5>
                                <p className="teal-text">Look at our student's last weeks analysis</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default studentForm
