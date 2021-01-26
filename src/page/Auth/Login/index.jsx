import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm';
import { login } from './../../Auth/userSlice';

function Login(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async (values) => {
        try {
            const action = login(values)
            const resultAction = await dispatch(action)
            // const user = unwrapResult(resultAction)
            unwrapResult(resultAction)
            history.push('/')
        } catch (err) {
            console.log('Failed to login!', err)
            enqueueSnackbar(err.message, { variant: 'error' })
        }
    }
    return (
        <>
            <div className="form-container sign-in-container">
                <LoginForm onSubmit={handleSubmit} />
            </div>
        </>
    );
}

export default Login;