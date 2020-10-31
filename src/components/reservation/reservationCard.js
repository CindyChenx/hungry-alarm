import React, { Component } from 'react'
import axios from 'axios';




export default class reservationCard extends Component {
    constructor(props) {
        super();
        console.log(props.reservation)
        this.state = {
            cid: props.reservation.cid,
            rid: props.reservation.rid,
            date: props.reservation.date,
            time: props.reservation.time,
            seats: props.reservation.seats,
            notes: props.reservation.notes,
            rating: props.reservation.rating,
            comment: props.reservation.comment,
            r_pic: "",
            r_name: "",
        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/restaurants/' + this.state.rid)
            .then(response => {
                console.log(response.data)
                const picture = response.data.r_pic
                const name = response.data.r_name
                this.setState({ r_pic: picture, r_name: name })

            })
    }

    render() {
        return (

            <div className="card" style={{ "width": "100%" ,"margin-bottom": "5%"}} >
                <img className="card-img-top" src={this.state.r_pic} alt="" />
                <div class="">
                    <h5>{this.state.r_name}</h5>
                    <p>reservation date: {this.state.date}</p>
                    <p>reservation time: {this.state.time}</p>
                    <p>appointment seat: {this.state.seats}</p>
                </div>


            </div>
        )
    }
}