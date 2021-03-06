import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import jwt_decode from 'jwt-decode';

export default class EventCreate extends Component {

    constructor(props) {
        super(props);
        this.onChangeRid = this.onChangeRid.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeStart = this.onChangeStart.bind(this)
        this.onChangeEnd = this.onChangeEnd.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangePicture = this.onChangePicture.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            rid: '',
            event_title: '',
            event_date: '',
            start_time: '',
            end_time: '',
            description: '',
            event_picture: ''
        }

    }


    onChangeRid(e) {
        this.setState({
            rid: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            event_title: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            event_date: date
        });
    }

    onChangeStart(e) {
        this.setState({
            start_time: e.target.value
        });
    }

    onChangeEnd(e) {
        this.setState({
            end_time: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangePicture(e) {
        this.setState({
            event_picture: e.target.value
        });
    }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // }
    onSubmit(e) {
        e.preventDefault();

        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        const eventCreate ={
            rid: decoded.rid,
            event_title: this.state.event_title,
            event_date: this.state.event_date,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            description: this.state.description,
            event_picture: this.state.event_picture
        }

        axios.post('http://localhost:5000/restaurants/events/create',eventCreate)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location = "/restaurant/event"
            })
            .catch(err =>{
                console.log(err)
            })
        
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text"
                            placeholder="your event name"
                            className="form-control"
                            value={this.state.event_title}
                            onChange={this.onChangeTitle} />
                    </div>
                    <div>
                        <label >Event date</label>
                        <DatePicker
                            dayPickerProps={{
                                month: new Date(2018, 10),
                                showWeekNumbers: true,
                                todayButton: 'Today',
                            }}
                            selected={this.state.event_date}
                            onChange={this.onChangeDate}
                        />
                    </div>


                    <div>
                        <label >Event start time</label>
                        <input type="time" onChange={this.onChangeStart} required></input>

                        <label>Event end time</label>
                        <input type="time" onChange={this.onChangeEnd} required></input>
                    </div>


                    <div className="form-group">
                        <input type="text"
                            placeholder="event description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription} />
                    </div>

                    <div className="form-group">
                        <input type="text"
                            placeholder="pictureURL"
                            className="form-control"
                            value={this.state.event_picture}
                            onChange={this.onChangePicture} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create event"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
