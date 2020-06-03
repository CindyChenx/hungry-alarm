import React, { Component } from 'react';

import Alert from './layout/alerts';
import axios from 'axios';


export default class UserLogin extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
        }
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

    onSubmit(e) {
        e.preventDefault();

        const userlogin = {

            email: this.state.email,
            password: this.state.password,
        }

        axios
            .post('http://localhost:5000/users/login', userlogin)
            .then(response => {
                localStorage.setItem('usertoken', response.data)
                // return response.data
                this.props.history.push('/user/profile')
            })
            .catch(err => {
                console.log(err.response.data.error)
                this.setState({errorMessage:err.response.data.error})
            })


    }




    render() {
        const message = this.state.errorMessage
        const alert = <Alert message={message} onDismiss />
        return (
            <div className="container" >
                <div>{alert}</div>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                    </div>


                    <div className="form-group">
                        <input type="password" className="form-control"
                            placeholder="pass word"
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Apply"
                            className="btn btn-primary" />
                    </div>

                </form>

            </div>
        );
    }
}
