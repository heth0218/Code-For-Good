import React, { useState, useEffect } from 'react'
import '../App.css'
import { connect } from 'react-redux';
import { registerUser } from '../actions/userActions'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';

const Register = ({ registerUser, isAuthenticated }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    let history = useHistory()

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/")
            M.toast({ html: `${name} you have successfully been registered!` })
        }
        // eslint-disable-next-line
    }, [isAuthenticated])


    const { name, email, password, password2 } = user

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        console.log(name, email, password, password2);
        registerUser({ name, email, password });
        e.preventDefault();
    }


    return (
        <div>
            <section className="section section-login">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel login teal darken-2 white-text center">
                                <h2>SEF Register</h2>
                                <form>
                                    <div className="input-field">
                                        <div className="material-icons prefix">account_circle</div>
                                        <input required type="text" name='name' value={name} id="name" onChange={onChange} />
                                        <label className="white-text" for="name">Name</label>
                                    </div>
                                    <div className="input-field">
                                        <div className="material-icons prefix">email</div>
                                        <input required type="email" name='email' value={email} id="email" onChange={onChange} />
                                        <label className="white-text" for="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <div className="material-icons prefix">lock</div>
                                        <input required type="password" name="password" value={password} id="password" onChange={onChange} />
                                        <label className="white-text" for="password">Password</label>
                                    </div>
                                    <div className="input-field">
                                        <div className="material-icons prefix">lock</div>
                                        <input required type="password" name="password2" value={password2} id="password2" onChange={onChange} />
                                        <label className="white-text" for="password2">Confirm Password</label>
                                    </div>
                                    <input type="submit" value="Register" onClick={onSubmit}
                                        className="btn btn-large btn-extended waves-effect waves-grey white black-text" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
})


export default connect(mapStateToProps, { registerUser })(Register)
