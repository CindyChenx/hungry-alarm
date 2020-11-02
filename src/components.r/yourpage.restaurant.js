import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';



export default class RestaurantPage extends Component {

    constructor(props) {
        super();
        this.state = {
            r_name: '',
            r_phone: '',
            r_email: '',
            r_address: '',
            r_zip: '',
            r_desciption: '',
            r_pic: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        axios.get('http://localhost:5000/restaurants/' + decoded.rid)
            .then((restaurant) => {
                console.log(restaurant)
                const restaurantdata = restaurant.data;
                this.setState({
                    r_name: restaurantdata.r_name,
                    r_phone: restaurantdata.r_phone,
                    r_email: restaurantdata.r_email,
                    r_address:restaurantdata.r_address,
                    r_zip:restaurantdata.r_zip,
                    r_desciption: restaurantdata.r_desciption,
                    r_pic: restaurantdata.r_pic
                })
            }).catch((error) => {
                console.log("errow from restaurant view page: " + error)
            })
    }

    render() {
        return (
            
            <div style={{"marginTop":"0"}}>
                <div style={{"backgroundPosition": "center","background-repeat": "no-repeat","width":"100vw","height":"30vh","backgroundImage": `url(${this.state.r_pic})`}}></div>
                <h2>{this.state.r_name}</h2>
                <p>{this.state.r_phone} | {this.state.r_email} | {this.state.r_address} {this.state.r_zip} </p>
                <p>{this.state.r_desciption}</p>
            </div>
        )
    }
}