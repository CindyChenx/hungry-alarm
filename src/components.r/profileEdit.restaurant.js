import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import style from "./RestaurantProfile.module.css";


export default class RestaurantProfileEdit extends Component {


    constructor(props) {
        super(props);
        this.onChangeRName = this.onChangeRName.bind(this)
        this.onChangeRPhone = this.onChangeRPhone.bind(this)
        this.onChangeREmail = this.onChangeREmail.bind(this)
        this.onChangeRPassword = this.onChangeRPassword.bind(this)
        this.onChangeRAddress = this.onChangeRAddress.bind(this)
        this.onChangeRZip = this.onChangeRZip.bind(this)
        this.onChangeRDesciption = this.onChangeRDesciption.bind(this)
        this.onChangeRPic = this.onChangeRPic.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            rid:'',
            r_name: '',
            r_phone: '',
            r_email: '',
            r_password: '',
            r_address: '',
            r_zip: '',
            r_desciption: '',
            r_pic: '',
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        
        axios.get('http://localhost:5000/restaurants/' + decoded.rid)
            .then(response => {
                console.log(response.params);
                this.setState({
                    rid: response.data.rid,
                    r_name: response.data.r_name,
                    r_phone: response.data.r_phone,
                    r_email: response.data.r_email,
                    r_password: response.data.r_password,
                    r_address: response.data.r_address,
                    r_zip: response.data.r_zip,
                    r_desciption: response.data.r_desciption,
                    r_pic: response.data.r_pic,
                })
            })
            .catch(function(error){
                console.log(error);
            })

    }
    

    onChangeRName(e) {
        this.setState({
            r_name: e.target.value
        });
    }
    onChangeRPhone(e) {
        this.setState({
            r_phone: e.target.value
        });
    }
    onChangeREmail(e) {
        this.setState({
            r_email: e.target.value
        });
    }

    onChangeRPassword(e) {
        this.setState({
            r_password: e.target.value
        });
    }

    onChangeRAddress(e) {
        this.setState({
            r_address: e.target.value
        });
    }

    onChangeRZip(e) {
        this.setState({
            r_zip: e.target.value
        });
    }

    onChangeRDesciption(e) {
        this.setState({
            r_desciption: e.target.value
        });
    }

    onChangeRPic(e) {
        this.setState({
            r_pic: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const restaurantEdit = {
            rid: this.state.rid,
            r_name: this.state.r_name,
            r_phone: this.state.r_phone,
            r_email: this.state.r_email,
            r_password: this.state.r_password,
            r_address: this.state.r_address,
            r_zip: this.state.r_zip,
            r_desciption: this.state.r_desciption,
            r_pic: this.state.r_pic
        }
        //console.log(restaurantSingup);
        axios.put('http://localhost:5000/restaurants/edit/'+ decoded.rid,restaurantEdit)
        .then(res => console.log(res.data));

        //this.props.history.push('/restaurant/profile')
        window.location = "/restaurant/profile"

    }

    render() {
        return (
            <div >
                <h5>Edit Restaurant profile information</h5>
                <Link className={style.editButton} to={"/restaurant/resetpassword/" + this.state.rid}>password reset</Link>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Restaurant Name</label>
                        <input type="text" className="form-control"
                            placeholder=""
                            value={this.state.r_name}
                            onChange={this.onChangeRName} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control"
                            placeholder=""
                            value={this.state.r_phone}
                            onChange={this.onChangeRPhone} />
                    </div>
                    <div className="form-group">
                        <label>Restaurant Address</label>
                        <input type="text" className="form-control"
                            
                            value={this.state.r_address}
                            onChange={this.onChangeRAddress} />
                    </div>
                    <div className="form-group">
                        <label>location zip code</label>
                        <input type="text" className="form-control"
                            value={this.state.r_zip}
                            onChange={this.onChangeRZip} />
                    </div>
                    <div className="form-group">
                        <label>Desciption</label>
                        <textarea rows ="5" type="text" className="form-control"
                            placeholder="Restaurant Desciption"
                            value={this.state.r_desciption}
                            onChange={this.onChangeRDesciption} />
                    </div>
                    <div className="form-group">
                        <label>Picture URL</label>
                        <input type="text" className="form-control"
                            placeholder="Restaurant Picture URL"
                            value={this.state.r_pic}
                            onChange={this.onChangeRPic} />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="save"
                            className="btn btn-primary" />
                    </div>

                </form>

            </div>
        )
    }
}