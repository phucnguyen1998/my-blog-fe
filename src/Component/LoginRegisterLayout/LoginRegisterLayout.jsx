import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Redirect, useHistory } from "react-router-dom";
import './style.css'
import Register from '../../page/Auth/Register';
import Login from '../../page/Auth/Login';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#fff'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    toolBar: {
        backgroundColor: '#fff'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function LoginRegisterLayout(props) {
    const loggedUser = useSelector(state => state.user.current);
    const isLogin = !!loggedUser.id
    const classes = useStyles();
    const { open, handleClose } = props
    const history = useHistory();


    function handleClickButtonSignIn() {
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container-login');
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

    function handleClickButtonSignUp() {
        const signUpButton = document.getElementById('signUp');
        const container = document.getElementById('container-login');
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    }
    if (!isLogin)
        return (
            <>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar className={classes.toolBar}>
                            <IconButton edge="start" color="default" onClick={() => {
                                handleClose()
                                history.goBack()
                            }} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>

                    </AppBar>
                    <List>
                        <div className="pt-5 pb-3">
                            <div className="container-login m-auto" id="container-login">

                                <Register />
                                <Login />

                                <div className="overlay-container-login">
                                    <div className="overlay-login">
                                        <div className="overlay-panel overlay-left">
                                            <h1>Welcome Back!</h1>
                                            <p>To keep connected with us please login with your personal info</p>
                                            <button className="ghost" id="signIn" onClick={handleClickButtonSignIn}>Sign In</button>
                                        </div>
                                        <div className="overlay-panel overlay-right">
                                            <h1>Hello, Friend!</h1>
                                            <p>Enter your personal details and start journey with us</p>
                                            <button className="ghost" id="signUp" onClick={handleClickButtonSignUp}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </List>
                </Dialog>
            </>
        );
    return (
        <>
            <Redirect to="/" />
        </>
    )
}

export default LoginRegisterLayout;