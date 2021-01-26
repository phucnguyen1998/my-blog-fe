import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../../page/Auth/userSlice';
import './style.css'


function Nav(props) {
    const loggedUser = useSelector(state => state.user.current);
    const dispatch = useDispatch()
    const isLogin = !!loggedUser.id
    const { handleClickOpen } = props

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">jundev17</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/post">Post</Link>
                            </li>
                            <li className="nav-item">
                                {!isLogin ?
                                    <Link onClick={handleClickOpen} className="nav-link" to="/login-register">Login/Register</Link> :
                                    <div className="dropdown">
                                        <button className="button-user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Hi,</span>
                                            {loggedUser.username}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-custom " aria-labelledby="dropdownMenuButton">
                                            <Link className="dropdown-item dropdown-menu-user" to="#">Infomation</Link>
                                            <Link className="dropdown-item dropdown-menu-user" to="#" onClick={handleLogoutClick}>Logout</Link>
                                        </div>
                                    </div>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;