import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';


export default class makereservation extends Component {
    constructor(props) {
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeTime = this.onChangeTime.bind(this)
        this.onChangeSeat = this.onChangeSeat.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            cid: "",
            rid: "",
            date: "",
            time: "",
            seats: "",
            notes: null,
            rating: null,
            comment: "",
            r_pic:'',
            r_name:''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({
            cid: decoded.id,
            rid: this.props.match.params.id,
        })

        axios.get('http://localhost:5000/restaurants/' + this.props.match.params.id)
        .then(response => {
            // console.log(response.data)
            const picture = response.data.r_pic
            const name = response.data.r_name
            this.setState({ r_pic: picture, r_name: name })

        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onChangeTime(e) {
        this.setState({
            time: e.target.value
        });
    }
    onChangeSeat(e) {
        this.setState({
            seats: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const makereservation = {
            cid: this.state.cid,
            rid: this.state.rid,
            date: this.state.date,
            time: this.state.time,
            seats: this.state.seats,
            notes: this.state.notes,
            rating: this.state.rating,
            comment: this.state.comment
        }


        axios
            .post('http://localhost:5000/reservation/add', makereservation)
            .then(response => {
                console.log('booking success')
            })
            .catch(err => {
                console.log(err.response.data.error)
               
            })

        //window.location = "/"

        //  TODO : send data to the database

    }


    render() {

        return (
            <div >
            <div style={{"backgroundPosition": "center","backgroundRepeat": "no-repeat","width":"100vw","height":"30vh","backgroundImage": `url(${this.state.r_pic})`}}></div>
                <h5>{this.state.r_name}</h5>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label >reservation date</label>
                        <DatePicker
                            dayPickerProps={{
                                month: new Date(2018, 10),
                                showWeekNumbers: true,
                                todayButton: 'Today',
                            }}
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div>
                        <label >reservation set time</label>
                        <br/>
                        <input type="time" onChange={this.onChangeTime} required></input>
                    </div>  <div className="form-row align-items-center">
                        <div className="col-auto my-1" onChange={this.onChangeSeat}>
                            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Preference</label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input style={{"margin":"10px"}} type="submit" value="make reservation"
                                className="btn btn-primary" />
                            <Link style={{"margin":"10px"}} className="btn btn-primary" to={"/home"}>cancle</Link>
                        </div>
                    </div>
                    

                </form>
            </div>
        );
    }

}