import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./LoginFormStyle.css";

const LoginFormView = function( {
                                    validEmail = () => {},
                                    validPassword = () => {},
                                    waiting = false,
                                    loginStatus = false,
                                    onSubmit = ( email, password, passwordConfirm ) => {},
                                } ) {
    const email = useRef( "" );
    const password = useRef( "" );

    const handleSubmit = ( event ) => {
        onSubmit(
            email.current.value,
            password.current.value
        );
        event.preventDefault();
    };

    return (
        <Form className={ "form my-4 mx-5" } id={ "basicFormLogin" }>
            <div className={ "container-fluid" }>
                <div className={ "row gx-0" }>
                    <div className={ "col mh-100 d-none d-lg-block" }>
                        <img
                            src={ require( "../../Images/Timeless_Books.jpg" ) }
                            className={ "img-fluid" } alt={ "Image Missing" }
                            id={ "imageLoginPage" }/>
                    </div>
                    <div className={ "col px-5 pt-5" }>
                        <h1><span id={ "name1" }>Yomu</span><span
                            id={ "name2" }>Bo</span></h1>
                        <h4>Sign into your account</h4>
                            <div className={ "form-row" }>
                                <div className={ "col" }
                                     id={ "formForEmailOrPasswordLogin" }>
                                    <Form.Group controlId="formBasicEmail"
                                                className={ "formBasicEmail" }>

                                        <Form.Control type="email"
                                                      placeholder="Enter email"
                                                      ref={ email }
                                                      isInvalid={ validEmail() }/>
                                        <Form.Control.Feedback type="invalid"
                                                               className={ "formBasicEmailFeedback" }>
                                            Email error message
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className={ "form-row" }
                                 id={ "formForEmailOrPasswordLogin" }>
                                <div className={ "col" }>
                                    <Form.Group controlId="formBasicPassword"
                                                className={ "formBasicPassword" }>

                                        <Form.Control type="password"
                                                      placeholder="Password"
                                                      ref={ password }
                                                      isInvalid={ validPassword() }/>

                                        <Form.Control.Feedback type="invalid"
                                                               className={ "formBasicPasswordFeedback" }>
                                            Password error message
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className={ "form-row" }>
                                <div className={ "col" }>
                                    <Button variant="primary" type="button"
                                            className={ "btn1" }
                                            onClick={ handleSubmit }>Login</Button>
                                </div>
                            </div>
                            <a href={ "#" }>Forgot password?</a>
                            <Link to="/registration">
                                <p>Don't have an account? Sign up here</p>
                            </Link>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default LoginFormView;