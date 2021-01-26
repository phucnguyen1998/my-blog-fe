import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from "yup";
import './style.css';
import { LinearProgress } from '@material-ui/core';

function RegisterForm(props) {
    const { onSubmit } = props;
    const validateForm = Yup.object().shape({
        username: Yup
            .string()
            .required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup
            .string()
            .required("Required"),
    })

    return (
        <>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={validateForm}
                onSubmit={async (values, { resetForm }) => {
                    await onSubmit(values)
                    resetForm({ values: '' })
                }}
            >
                {(formProps) => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                    } = formProps
                    return (
                        <Form onSubmit={handleSubmit}>
                            {isSubmitting && <LinearProgress />}
                            {/* <LinearProgress color="secondary" /> */}
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
                                <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                            <span>or use your email for registration</span>
                            <input
                                style={{ borderRadius: 10 }}
                                className={(errors.username && touched.username) ? `emailError inputField` : `inputField`}
                                value={values.username}
                                name="username"
                                type="text"
                                placeholder="Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="username">
                                {(msg) => (<>
                                    <div className="wrap">
                                        <div className="validate-input">* {msg}</div>
                                    </div>
                                </>)}
                            </ErrorMessage>

                            <input
                                style={{ borderRadius: 10 }}
                                className={(errors.email && touched.email) ? `emailError inputField` : `inputField`}
                                value={values.email}
                                name="email"
                                type="email"
                                placeholder="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="email">
                                {(msg) => (<>
                                    <div className="wrap">
                                        <div className="validate-input">* {msg}</div>
                                    </div>
                                </>)}
                            </ErrorMessage>

                            <input
                                style={{ borderRadius: 10 }}
                                className={(errors.password && touched.password) ? `emailError inputField` : `inputField`}
                                value={values.password}
                                name="password"
                                type="password"
                                placeholder="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="password">
                                {(msg) => (<>
                                    <div className="wrap">
                                        <div className="validate-input">* {msg}</div>
                                    </div>
                                </>)}
                            </ErrorMessage>
                            <button type="submit">Sign Up</button>
                        </Form>
                    )
                }}
            </Formik>
        </>
    );
}

export default RegisterForm;