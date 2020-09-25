import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'


export default class UserEdit extends Component {
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

    componentDidMount() {


        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        axios.get('http://localhost:5000/users/' + decoded.id)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    phone: response.data.phone,
                    email: response.data.email,
                    password: response.data.password,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

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
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const useredit = {
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
        }
        
        axios.put('http://localhost:5000/users/edit/'+ decoded.id,useredit)
        .then(res => console.log(res.data));

        window.location = "/user/profile"

    }



    render() {
        return (
            <div className="container">

                {/* TODO need a image here */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>First Name</label>
                        <input type="text" className="form-control"
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName} />
                    </div>

                    <div className="form-group">
                    <label>Last Name</label>
                        <input type="text" className="form-control"
                            placeholder="Last name"
                            value={this.state.last_name}
                            onChange={this.onChangeLastName} />
                    </div>


                    <div className="form-group">
                    <label>Phone Number</label>
                        <input type="text" className="form-control"
                            placeholder="Phone number"
                            value={this.state.phone}
                            onChange={this.onChangePhone} />
                    </div>

                    {/* TODO:alarm pop up */}
                    

                    <div className="form-group">
                        <input type="submit" value="Apply"
                            className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }

}