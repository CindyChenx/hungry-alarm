import React, { Component } from 'react';
import { login } from './RestaurantFunctions'


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
             // this.props.history.push('/resturant')
            }
          })

        //window.location = "/user";

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
                            placeholder="pass word"
                            value={this.state.r_password}
                            onChange={this.onChangePassword} />
                    </div>

                    {/* TODO: conform password check */}
                    
                    <div className="form-group">
                        <input type="submit" value="Apply"
                            className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}
