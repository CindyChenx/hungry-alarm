import React, { Component , useState} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Card from "./appointmentCard"



export default class AppointmentDetail extends Component {
   

    constructor(props) {
        
        super();
        this.state = {
            reservation: [],
            customer:0,
            notcancelcount:0,
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        axios.get("http://localhost:5000/reservation/restaurant/" + decoded.rid)
            .then(response => {
                console.log(response.data);
                const reservation = response.data
                this.setState({ reservation: reservation , customer: reservation.length})
                this.Notcancelcount()
            }).catch(error => {
                console.log(error)
            })

        

    }

    Notcancelcount(){
        let customercount = 0;
        this.state.reservation.map((reservation) => {
            if(reservation.cid !== 0){
                customercount++;
                console.log(customercount)  
            } 
        })
        this.setState({notcancelcount: customercount})
    }

    appointmentList() {
        let customercount = 0;
        return this.state.reservation.map((reservation, index) => {
            
            if(reservation.cid !== 0){
                customercount++;
                console.log(customercount)
                return <Card key={index} reserv={reservation} />
                
            }
            
        }) 
        
    }

    render() {
        return (
            <div style={{ "marginTop": "0" }}>
                <p>reservation number:{this.state.customer}</p>
                <p>reservation cancel:{this.state.customer-this.state.notcancelcount}</p>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th style={{fontSize:"10px"}}>customer name</th>
                            <th style={{fontSize:"10px"}}>reservation data</th>
                            <th style={{fontSize:"10px"}}>arrive time</th>
                            <th style={{fontSize:"10px"}}>seat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.appointmentList()}
                    </tbody>

                </table>

            </div>
        )
    }
}