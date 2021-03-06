import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Card from './reservationCard';
import HistoryCard from './historyReservCard'




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
                // console.log(response.data)
                const reservation = response.data
                this.setState({ reservations: reservation });
            })
            .catch((error) => {
                console.log(error);
            })
    }




    ReservationList() {
        var today = new Date();
        // console.log(today.getTime())

        return this.state.reservations.map(reservation => {
            var reservday = new Date(reservation.date);
            // console.log(reservday.getTime())
            if (today < reservday) {
                return <Card deletereservation={this.deletereservation} key={reservation.rid} reservation={reservation} />
            }

        })
    }

    HistoryList() {
        var today = new Date();
        // console.log(today.getTime())

        return this.state.reservations.map(reservation => {
            var reservday = new Date(reservation.date);
            // console.log(reservday.getTime())
            if (today > reservday) {
                return <HistoryCard key={reservation.rid} reservation={reservation} />
            }

        })
    }

    deletereservation(res_id, rid) {

        // console.log(res_id)
        // console.log(rid)
        // here might have a bug in the furture since the date and time should be cancal and release for other booking
        const reservationupdate = {
            cid: 0,
            rid: rid,
            // date: "000",
            // time: "000",
            seats: 0,
            notes: null,
            rating: null,
            comment: null,
        }
        axios.put('http://localhost:5000/reservation/update/' + res_id, reservationupdate)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            });
        // axios.delete('http://localhost:5000/reservation/cancel/'+res_id )
        // .then(res => {
        //     console.log(res.data);
        //     window.location.reload();
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
    }



    render() {
        return (

            <div style={{ "margin": "0% 5% 0% 5%" }}>
                <div> {this.ReservationList()}</div>
                <h5>Booking history</h5>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th style={{ fontSize: "10px" }}>Restaurant</th>
                            <th style={{ fontSize: "10px" }}>visited date</th>
                            <th style={{ fontSize: "10px" }}>rating</th>
                            <th style={{ fontSize: "10px" }}>comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.HistoryList()}
                    </tbody>
                </table>

            </div>
        )
    }
}