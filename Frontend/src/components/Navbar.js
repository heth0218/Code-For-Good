import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ isAuthenticated, user }) => {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
        });
    })

    return (
        <div>
            <div class="navbar-fixed">
                <nav class="teal">
                    <div class="container">
                        <div class="nav-wrapper">
                            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <a href="#home" class="brand-logo">SEF</a>
                            <ul class="right hide-on-med-and-down">
                                {
                                    user && user.roles[0] === 'admin' && (
                                        <li>
                                            <Link to='/addStudent' class="waves-effect waves-light">
                                                <i className="material-icons">add</i>
                                            </Link>
                                        </li>
                                    )
                                }
                                <li>
                                    <Link to='/' class="waves-effect waves-light">Home</Link>
                                </li>
                                {isAuthenticated ? (
                                    < Fragment>
                                        <li>
                                            <span>
                                                Hello, {user.name}
                                            </span>
                                        </li>
                                    </Fragment>
                                ) : (
                                        <Fragment>
                                            <li>
                                                <Link to='/register' class="waves-effect waves-light">Register</Link>
                                            </li>
                                            <li>
                                                <Link to='/login' class="waves-effect waves-light">Login</Link>
                                            </li>
                                        </Fragment>)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <ul id="slide-out" className="sidenav">
                <li class="active">
                    <Link to='/' class="waves-effect waves-light">Home</Link>
                </li>
                {isAuthenticated ? (
                    < Fragment>
                        <li>
                            Hello, {user.name}
                        </li>
                    </Fragment>
                ) : (
                        <Fragment>
                            <li>
                                <Link to='/register' class="waves-effect waves-light">Register</Link>
                            </li>
                            <li>
                                <Link to='/login' class="waves-effect waves-light">Login</Link>
                            </li>
                        </Fragment>)}
                <li><div className="divider"></div></li>
            </ul>
        </div >
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user
})


export default connect(mapStateToProps, null)(Navbar)
