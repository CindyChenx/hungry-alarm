import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom';
import axios from "axios"
import style from '../../components.r/eventTemplate.module.css'


export default class EventTemplet extends Component {
    constructor() {
        super()
        this.state = {
            event_id: '',
            rid: '',
            event_title: '',
            event_date: '',
            start_time: '',
            end_time: '',
            description: '',
            event_picture: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        axios.get('http://localhost:5000/restaurants/events/event/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    rid: response.data.rid,
                    event_title: response.data.event_title,
                    event_date: response.data.event_date,
                    start_time: response.data.start_time,
                    end_time: response.data.end_time,
                    description: response.data.description,
                    event_picture: response.data.event_picture
                })
            })
    }

    render() {
        return (
            <div className={style.container}>
                <img
                    src={this.state.event_picture}
                    alt='customer profile' className={style.titlepic}
                />
                <h1 className={style.titletext}>{this.state.event_title}</h1>
                <div className={style.timeTextContainer}>
                    <h3 className={style.timeTextDate}>{this.state.event_date} </h3>
                    <h3 className={style.timeTextTime}>{this.state.start_time} - {this.state.end_time}</h3>
                </div>
                <div className={style.decriptionContainer}>
                    <h5 className={style.decriptionText}>{this.state.description}</h5>
                </div>
            </div>

        )
    }
}