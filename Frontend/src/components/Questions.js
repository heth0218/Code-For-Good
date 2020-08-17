import React, { useState } from 'react';
import { connect } from 'react-redux'
import { examineStudent } from '../actions/studentActions'
import M from 'materialize-css/dist/js/materialize.min.js';

const Question = () => {

    const [questions, setQuestions] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
    });

    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } = questions;

    const onChange = e => setQuestions({ ...questions, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);
        examineStudent({
            B11: q1,
            B12: q2,
            B13: q3,
            B14: q4,
            T11: q5,
            T12: q6,
            T13: q7,
            T14: q8,
            V11: q9,
            V12: q10
        });
        M.toast({ html: 'The response has been recorded' })
    };

    return (
        <div>
            <div className="container" style={{ marginTop: '30px' }}>
                <form onSubmit={onSubmit}>

                    <div className="row">
                        <div className="col l8">
                            <p>I share my opinions in group discussion.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q1" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q1" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I listen to the opinion of others in group discussion.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q2" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q2" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I share resources and ideas with my group.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q3" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q3" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I ask suggestions/questions to my group when I am stuck/confused about the task.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q4" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q4" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I identify the main idea of the given situation/information/task.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q5" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q5" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I pause and observe to form a thought or argument.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q6" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q6" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I listen to understand different perspectives.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q7" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q7" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I ask questions (peers or teachers) to deepen understanding of the given situation/information.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q8" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q8" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I am constantly looking out for new ways to improve myself.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q9" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q9" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8">
                            <p>I can brainstorm and build on ideas of others.</p>
                        </div>
                        <div className="col l4">
                            <label>
                                <input name="q10" type="checkbox" className="filled-in" value="yes" onChange={onChange} />
                                <span>Yes&nbsp;&nbsp;</span>
                            </label>
                            <label>
                                <input name="q10" type="checkbox" className="filled-in" value="no" onChange={onChange} />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <input type="submit" className="waves-effect waves-light btn" />
                </form>
            </div>
            <div style={{ marginBottom: '20px' }}></div>
        </div>
    )
}

export default connect(null, {})(Question)