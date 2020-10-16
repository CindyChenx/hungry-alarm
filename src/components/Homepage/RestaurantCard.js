
import React from 'react';
import style from './restaurantCard.module.css'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom';


function RestaurantCard(props) {

    function addFavorite() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const addfavorite = {
            rid: props.user.rid,
            cid: decoded.id
        }

        axios.post('http://localhost:5000/users/favorite/add', addfavorite)
            .then(res => {
                console.log(res);
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        

        <div className={style.Card}>
            <div className={style.picturedisplay}>
                <img style={{ "width": "45vw", "height": "15vh" }} src={props.user.r_pic} alt={props.user.r_name} />
            </div>
            <div className={style.content}>
                <div style={{ "margin": "3% 5%" }}>
                    <div>
                        <h3>{props.user.r_name}</h3>
                    </div>
                    <div>
                        <button onClick={addFavorite} style={{ "float": "right" }}>add favorite</button>
                    </div>
                </div>
                <div style={{ "margin": "3% 0%" }}>
                    <h6> {props.user.r_phone} |  {props.user.r_address} </h6>
                </div>
                <div>
                    {/* it might crash when then data is null display can not split null */}
                    <p className="card-text" >{props.user.r_desciption.split("\n").map(function (item) {
                        item = item.substring(0, 100) + " ... ";

                        return (
                            <span key={item}>
                                {item}
                                <Link to={"/user/seedetail/" + props.user.rid}>Read more</Link>
                            </span>
                        )
                    })}</p>
                </div>
            </div>
            <hr />
        </div>


    )
}
export default RestaurantCard;