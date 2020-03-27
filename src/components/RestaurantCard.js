import React from 'react';

function RestaurantCard(props) {
    return (
        <div className="col-md-6">
            <div className="card businessCard" >
                <div className="card-body">
                    {/* gonna need to redo the css part */}
                    <img className ="resturant-image" style={{"width": "300px"}} src={props.user.r_pic} alt={props.user.r_name}/>
                    <h1>{props.user.r_name}</h1>
                    <h6>{props.user.r_phone}</h6>
                    <h6>{props.user.r_address}</h6>  
                    <p className="card-text">about:{props.user.r_desciption.split("\n").map(function (item) {
                        return (
                            <span>
                                {item}
                                <br />
                            </span>
                        )
                    })}</p>
                </div>
            </div>
        </div>
    )
}
export default RestaurantCard;