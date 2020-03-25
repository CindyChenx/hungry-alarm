import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom';


export default class UserLogin extends Component {
    constructor(props){
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeConform = this.onChangeConform.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            firstName:'',
            lastName:'',
            emil:'',
            phone:'',
            password:'',
        }
    }
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            emil: e.target.value
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emil: this.state.emil,
            phone: this.state.phone,
            password: this.state.password,
        }

        console.log(usersingup);
        
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
                        value = {this.state.firstName}
                        onChange={this.onChangeFirstName}/>
                    </div>

                    <div className="form-group">  
                        <input type="text" className="form-control" 
                        placeholder="Last name"
                        value = {this.state.lastName}
                        onChange={this.onChangeLastName}/>
                    </div>

                    <div className="form-group">  
                        <input type="text" className="form-control" 
                        placeholder="Email"
                        value = {this.state.email}
                        onChange={this.onChangeEmail}/>
                    </div>

                    <div className="form-group">  
                        <input type="text" className="form-control" 
                        placeholder="Phone number"
                        value = {this.state.phone}
                        onChange={this.onChangePhone}/>
                    </div>

                    <div className="form-group">  
                        <input type="password" className="form-control" 
                        placeholder="pass word"
                        value = {this.state.password}
                        onChange={this.onChangePassword}/>
                    </div>

                    {/* TODO: conform password check */}
                    <div className="form-group">  
                        <input type="password" className="form-control" placeholder="Conform password"/>
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
