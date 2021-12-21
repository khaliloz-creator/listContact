import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../css/login.css";
import * as Icon from 'react-bootstrap-icons';
import AuthService from "../services/user.service";
import { Link } from 'react-router-dom';



const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: "",
            password: "",
            loading: false,
            message: "",
            move: false,
        };
    }


    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.email, this.state.password).then(
                () => {

                    this.setState({

                        move: true
                    });
                    console.log("loginsuccesfully")
                    /* window.location.reload();*/
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="screen">
                    <div className="screen__content">

                        <Form
                            className="login"
                            onSubmit={this.handleLogin}
                            ref={c => {
                                this.form = c;
                            }}
                        >
                            <div className="login__field">
                                <i className="login__icon  " ><Icon.PersonFill /></i>

                                <Input
                                    type="text"
                                    className="login__input"
                                    name="username"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    validations={[required]}
                                    placeholder="Username"
                                />
                            </div>


                            <div className="login__field">
                                <i className="login__icon "><Icon.LockFill /></i>
                                <Input
                                    type="password"
                                    className="login__input"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required]}
                                    placeholder="Password"
                                />
                            </div>



                            <button
                                className="button login__submit"
                                disabled={this.state.loading}
                            >
                                {this.state.loading && (


                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span className="button__text">Login</span>
                                <i class="button__icon "><Icon.ArrowBarRight /></i>
                            </button>


                            {this.state.move && (
                                <div className="form-group">
                                    <div className="alert alert-success" role="alert">
                                        {"You have succesffully logged"}

                                    </div>

                                </div>
                            )}
                            {this.state.message && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {"You need to register !!"}

                                    </div>
                                    <Link to="/Register" class="btn-get-started ">Register</Link>
                                </div>
                            )}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={c => {
                                    this.checkBtn = c;
                                }}
                            />

                            {this.state.move && (



                                <Link to="/App" class="btn-get-started ">Continue to your app♣</Link>

                            )}
                        </Form>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        );
    }
}