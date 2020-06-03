import React, { Component } from 'react';
import { login } from './RestaurantFunctions'

import style from "./LoginPage.module.css";


export default class RestaurantLogin extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            r_email: '',
            r_password: '',
            // redirectToReferrer: false,
        }
    }



    onChangeEmail(e) {
        this.setState({
            r_email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            r_password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const restaurantLogin = {

            r_email: this.state.r_email,
            r_password: this.state.r_password,
        }

        console.log(restaurantLogin);

        login(restaurantLogin).then(res => {
            if (res) {
                this.props.history.push('/restaurant/profile')
            }
        })

        // axios.post('http://localhost:5000/restaurants/login', restaurantLogin)
        //       .then(response => {
        //         localStorage.setItem('usertoken', response.data)
        //         this.props.history.push('/restaurant/profile')
        //       })
        //       .catch(err => {
        //         console.log(err)
        //       })

        //window.location = "/restaurant/profile";

    }



    render() {
        return (
            <div className="container">
                <h1>Restaurant login</h1>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Email"
                            value={this.state.r_email}
                            onChange={this.onChangeEmail} />
                    </div>


                    <div className="form-group">
                        <input type="password" className="form-control"
                            placeholder="password"
                            value={this.state.r_password}
                            onChange={this.onChangePassword} />
                    </div>

                    {/* TODO: conform password check */}

                    <div className="form-group">
                        <input type="submit" value="Apply"
                            className="btn btn-primary" />
                    </div>

                </form>

                <div className={style.container}>
                    <div className={style.headerContainer}>
                        <header>
                            <button className={style.personal} align="center" onClick="goToPersonal()">Personal</button><button className={style.restaurant} align="center" onClick="goToRestaurant()">Restaurant</button>
                        </header>
                    </div>

                    <h1 align="center">Hungry Alarm</h1>
                    <form action="Sumbmit" className={style.loginform}>
                        <div>
                            <input className={style.email} type="text"
                                placeholder="Email:"
                                value={this.state.r_email}
                                onChange={this.onChangeEmail} />
                            <input className={style.password} type="password"
                                placeholder="Password:"
                                value={this.state.r_password}
                                onChange={this.onChangePassword} />
                        </div>
                        <div className={style.wrapper}>
                            <a href="/restaurant/register">Create Account</a>
                            <p>visit our website to get more information or call our customer service.</p>

                            {/* <div className={style.login} align="center" onClick="login()">Login</> */}
                            <div className="form-group">
                                <input type="submit" value="Apply" className={style.login} align="center" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
