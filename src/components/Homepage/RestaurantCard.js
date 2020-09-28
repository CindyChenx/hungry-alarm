import React from 'react';
import style from './restaurantCard.module.css'



function RestaurantCard(props) {
    return (


        <div className = {style.Card}>
            <div className={style.picturedisplay}>
                <img  style={{ "width": "300px" , "height":"200px"}} src={props.user.r_pic} alt={props.user.r_name} />
            </div>
            <div className={style.content}>
                <div>
                <h1 >{props.user.r_name}</h1> <button  style={{"float":"right"}}>add favorite</button></div>
                <h6>{props.user.r_phone}</h6>
                <h6>{props.user.r_address}</h6>
                {/* it might crash when then data is null display can not split null */}
                <p className="card-text">{props.user.r_desciption.split("\n").map(function (item) {
                    item = item.substring(0,180)+" ... ";

                    return (
                        <span>
                            {item}
                            <a >Read more</a>
                        </span>
                    )
                })}</p>
            </div>
            <hr/>
        </div>


    )
}
export default RestaurantCard;