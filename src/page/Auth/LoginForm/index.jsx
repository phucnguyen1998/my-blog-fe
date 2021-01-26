import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import './style.css';

function LoginForm(props) {
    const { onSubmit } = props;
    const validateForm = Yup.object().shape({
        identifier: Yup.string().email("Invalid email format").required("Required"),
        password: Yup
            .string()
            .required("Required"),
    })

    return (
        <>
            <Formik
                initialValues={{ identifier: '', password: '' }}
                validationSchema={validateForm}
                onSubmit={(values) => { onSubmit(values); }}
            >
                {(formProps) => {
                    const {
                        touched,
                        errors,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                    } = formProps
                    return (
                        <Form onSubmit={handleSubmit}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
                                <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                            <span>or use your account</span>
                            <input
                                style={{ borderRadius: 10 }}
                                className={(errors.identifier && touched.identifier) ? `emailError inputField` : `inputField`}
                                name="identifier"
                                type="email"
                                placeholder="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="identifier">
                                {(msg) => (<>
                                    <div className="wrap">
                                        <div className="validate-input">* {msg}</div>
                                    </div>
                                </>)}
                            </ErrorMessage>

                            <input
                                style={{ borderRadius: 10 }}
                                className={(errors.password && touched.password) ? `passwordError inputField` : `inputField`}
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
                            <Link to="#">Forgot your password?</Link>
                            <button>Sign In</button>
                        </Form>
                    )
                }}
            </Formik>

        </>
    );
}

export default LoginForm;