import React, { Component } from 'react';
import { register } from './UserFunctions';



export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeConform = this.onChangeConform.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: '',
        }
    }
    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeConform(e) {
        this.setState({
            conform: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const usersingup = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
        }

        console.log(usersingup);
        
        register(usersingup).then(res => {
            this.props.history.push('/register')
        })

        //window.location = "/"

        //  TODO : send data to the database

    }





    render() {
        return (
            <div className="container">

                {/* TODO need a image here */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="First name"
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Last name"
                            value={this.state.last_name}
                            onChange={this.onChangeLastName} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Phone number"
                            value={this.state.phone}
                            onChange={this.onChangePhone} />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control"
                            placeholder="pass word"
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                    </div>

                    {/* TODO:alarm pop up */}
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Conform password" />
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