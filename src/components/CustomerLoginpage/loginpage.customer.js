import React, { Component } from 'react';
import Alert from '../layout/alerts';
import axios from 'axios';
import style from "../../components.r/LoginPage.module.css";
import { Link } from "react-router-dom";


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
                this.setState({ errorMessage: err.response.data.error })
            })


    }




    render() {
        const message = this.state.errorMessage
        const alert = <Alert message={message} onDismiss />
        return (
            
                
                <div className={style.container}>
                <div>{alert}</div>
                    <div className={style.headerContainer}>
                        <header>
                            <Link to="/" className={style.personal} align="center" >Personal</Link>
                           
                            <Link to="/restaurant/start" className={style.restaurant} align="center">Restaurant</Link>
                        </header>
                    </div>

                    <h1 align="center">Hungry Alarm</h1>
                    <h5 align="center">customer login</h5>
                    <form onSubmit={this.onSubmit} className={style.loginform}>
                        <div>


                            <input className={style.email} type="text"
                                placeholder="Email:"
                                value={this.state.email}
                                onChange={this.onChangeEmail} />
                            <input className={style.password} type="password"
                                placeholder="Password:"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <div className={style.wrapper}>
                            <a href="/restaurant/register">Create Account</a>
                            <p>visit our website to get more information or call our customer service.</p>

                            <div className="form-group">
                                <input type="submit" value="Apply" className={style.login} align="center" />
                            </div>
                        </div>
                    </form>

                </div>
           


        );
    }
}
