import React, { Component } from 'react';
import style from './eventspage.module.css';
import Card from './eventCard'
import { Link } from "react-router-dom";
import axios from 'axios';
import jwt_decode from 'jwt-decode';



export default class RestaurantEvent extends Component {

    constructor(props){
        super(props)
        this.state = {events:[]};
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        axios.get('http://localhost:5000/restaurants/events/' + decoded.rid)
            .then(response => {
                console.log(response.data)
                const events = response.data;
                this.setState({ events });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    EventList(){
        return this.state.events.map(currentevent =>{
            return <Card key = {currentevent.event_id} event= {currentevent}/>
        });
    }

    render() {
        return (
            <div className={style.create}>
                <img className={style.titlepic} src="https://cdn.dribbble.com/users/454118/screenshots/6989160/open_bar_tavern_dribbble.jpg" alt="bar logo" />
                <Link to="/restaurant/eventCreate" className="nav-link">
                    <button className={style.creatEventbt}>New event</button>
                </Link>
                <div>{this.EventList()}</div>
                


            </div>
        )
    }
}