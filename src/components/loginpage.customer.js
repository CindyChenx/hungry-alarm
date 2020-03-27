import React, { Component } from 'react';
import { login } from './UserFunctions'


export default class UserLogin extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: '',
            password: '',
            // redirectToReferrer: false,
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

        console.log(userlogin);

        login(userlogin).then(res => {
            if (res) {
              this.props.history.push('/login')
            }
          })

        window.location = "/user";

        //  TODO : send data to the database

    }



    render() {
        return (
            <div className="container">

                <form onSubmit={this.onSubmit}>
                    
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
