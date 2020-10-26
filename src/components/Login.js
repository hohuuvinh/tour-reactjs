import React, { Component } from 'react';
import Header from './Header';
import fire from './../config/fire';
import LoginForm from './LoginForm';
import AdminManage from './AdminManage';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
            }
        })
    }
    render() {
        return (
            <div>
                <Header />
                {this.state.user ? (<AdminManage />) : (<LoginForm />)}

            </div>
        )
    }
}
