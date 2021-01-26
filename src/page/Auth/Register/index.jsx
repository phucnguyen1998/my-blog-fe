import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { register } from './../../Auth/userSlice'
import RegisterForm from '../RegisterForm';
import { useSnackbar } from 'notistack';

function Register(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()
    const handleSubmit = async (values) => {
        try {
            const action = register(values)
            const resultAction = await dispatch(action)
            // const user = unwrapResult(resultAction)
            unwrapResult(resultAction)
            enqueueSnackbar('Register Successfuly !', { variant: 'success' })
            history.push('/')
        } catch (err) {
            enqueueSnackbar(err.message, { variant: 'error' })
        }
    }
    return (
        <div className="form-container sign-up-container">
            <RegisterForm
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default Register;