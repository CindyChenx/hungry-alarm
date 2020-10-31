import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Card  from './reservationCard';



export default class customerReservation extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            reservations: []
        }
    }

    componentDidMount() {

        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const customerID = decoded.id

        axios.get('http://localhost:5000/reservation/customer/' + customerID)
            .then(response => {
                console.log(response.data)
                const reservation = response.data
                this.setState({ reservations: reservation });
            })
            .catch((error) => {
                console.log(error);
            })
    }




    ReservationList() {
        return this.state.reservations.map(reservation =>{
            return <Card key ={reservation.rid} reservation = {reservation}/>
        })
    }

    

    render() {
        return (

            <div style={{"margin":"0% 5% 0% 5%"}}>
                <div>page to display the reservation</div>
                <div> {this.ReservationList()}</div>
               
            </div>
        )
    }
}