import React, { Component } from 'react'
import axios from 'axios';
import style from './reservation.module.css'
import { Link } from 'react-router-dom';
import Dialog from '../../components/layout/Dialog'
import ReactStars from "react-rating-stars-component";



export default class reservationCard extends Component {
    constructor(props) {
        super();
        this.commentChange = this.commentChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


        this.state = {
            cid: props.reservation.cid,
            rid: props.reservation.rid,
            date: props.reservation.date,
            time: props.reservation.time,
            seats: props.reservation.seats,
            notes: props.reservation.notes,
            rating: props.reservation.rating,
            comment: props.reservation.comment,
            res_id: props.reservation.reservation_id,
            r_pic: "",
            r_name: "",
            isOpen: false,
        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/restaurants/' + this.state.rid)
            .then(response => {
                // console.log(response.data)
                const picture = response.data.r_pic
                const name = response.data.r_name
                this.setState({ r_pic: picture, r_name: name })

            })
    }


    onSubmit(e) {
        e.preventDefault();

        const updateRating = {
            cid: this.state.cid,
            rid: this.state.rid,
            date: this.state.date,
            time: this.state.time,
            seats: this.state.seats,
            notes: this.state.notes,
            rating: this.state.rating,
            comment: this.state.comment
        }

        axios.put('http://localhost:5000/reservation/update/' + this.state.res_id, updateRating)
            .then(res => {
                console.log(res)
                this.setState({ isOpen: false });
            })
            .catch(error => {
                console.log('error come from commend' + error)
            })

    }

    commentChange(e) {
        this.setState({
            comment: e.target.value
        });
    }


    render() {

        const ratingChanged = (newRating) => {
            console.log(newRating);
            this.setState({ rating: newRating })
        };

        let ratingdisplay = (
            <ReactStars
                count={5} value={this.state.rating} 
                size={24}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                edit={false}
            />
        )

        
        if (this.state.rating === null){
            ratingdisplay = null
        }

        let comment = (
            <p>{this.state.comment}</p>
        )

        if(this.state.comment === ""){
            comment = null
        }

            return (

                <div className="card" style={{ "width": "100%", "marginBottom": "5%" }} >
                    <img className="card-img-top" src={this.state.r_pic} alt="" />
                    <div className="">
                        <h5>{this.state.r_name}</h5>  
                        {/* {ratingdisplay} */}
                        
                        <p className={style.reservationtext}>reservation date: {this.state.date}</p>
                        <p className={style.reservationtext}>reservation time: {this.state.time}</p>
                        <p className={style.reservationtext}>reserved seats: {this.state.seats}</p>
                        <button onClick={() => { this.props.deletereservation(this.state.res_id, this.state.rid); }} className="btn btn-primary" >Cancel Reservation</button>
                        {/* <button className="btn btn-primary" style={{ "marginLeft": "12px" }} onClick={(e) => this.setState({ isOpen: true })}>comment</button> */}
                        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                            <h5>{this.state.r_name}</h5>
                            <form onSubmit={this.onSubmit}>
                                <ReactStars
                                    count={5} value={this.state.rating} onChange={ratingChanged}
                                    size={24}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                                <textarea rows="4" cols="30" placeholder="give your commend here " value={this.state.comment} onChange={this.commentChange} />
                                <div className="form-group">
                                    <input type="submit" value="submit"
                                        className="btn btn-primary" />
                                </div>
                            </form>

                        </Dialog>

                        
                    </div>
                    {comment}
                </div>
            )
    }
}