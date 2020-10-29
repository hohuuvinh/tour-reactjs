import React, { Component } from 'react';
import fire from './../config/fire';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            // console.log(err.code);
            alert(err.code)
        })
    }
    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <div>



                    </div>

                    <div className="container-fluid mt-5">
                        <div className="shadow-sm bg-white pt-2 pl-4 pr-4 pb-4" style={{ margin: 'auto', width: '300px' }}>
                            <p className="text-center font-weight-bold" style={{ fontSize: '150%' }}>Đăng nhập</p>
                            <label>Email</label>
                            <input className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="enter email address"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <label className="mt-3">Mat Khau</label>
                            <input className="form-control"
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                id="password"
                                placeholder="enter password"
                                value={this.state.password}
                            />
                            <div className="text-center mt-2">
                                <button className="btn btn-primary mr-2" onClick={this.login}>Login</button>
                                <button className="btn btn-primary" onClick={this.signup}>Signup</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
