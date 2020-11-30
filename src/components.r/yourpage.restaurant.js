import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import ReactStars from "react-rating-stars-component";


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
            r_pic: '',
            reservation:[],
            avgrating:null,
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        axios.get('http://localhost:5000/restaurants/' + decoded.rid)
            .then((restaurant) => {
                // console.log(restaurant)
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

            axios.get("http://localhost:5000/reservation/restaurant/" + decoded.rid)
            .then(response => {
                // console.log(response.data);
                const reservation = response.data
                this.setState({ reservation: reservation})
                this.countrate()
            }).catch(error => {
                console.log(error)
            })
    }

    countrate(){
        let ratingscore = 0;
        let peoplecount = 0;
        this.state.reservation.map(reservation =>{
            if(reservation.rating !== null){
                // console.log(reservation.rating)
                ratingscore = ratingscore + reservation.rating
                peoplecount++;
                // console.log(ratingscore)
                // console.log(peoplecount)
            }
        })
        const averagerating = ratingscore/peoplecount
        if(averagerating >0 ){
            console.log(averagerating)
            this.setState({avgrating:averagerating})
        }
    }

    render() {
        let ratingdisplay = (
            <ReactStars
                count={5} value={this.state.avgrating} 
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                edit={false}
            />
        )

        
        if (this.state.avgrating === null){
            ratingdisplay = null
        }

        return (
            
            <div style={{"marginTop":"0"}}>
                <div style={{"backgroundPosition": "center","background-repeat": "no-repeat","width":"100vw","height":"30vh","backgroundImage": `url(${this.state.r_pic})`}}></div>

                <h2>{this.state.r_name}</h2>
                {ratingdisplay}
                <p>{this.state.r_phone} | {this.state.r_email} | {this.state.r_address} {this.state.r_zip} </p>
                <p>{this.state.r_desciption}</p>
            </div>
        )
    }
}