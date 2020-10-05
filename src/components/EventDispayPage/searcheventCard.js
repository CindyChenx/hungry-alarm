import React from 'react';

import axios from 'axios';
import jwt_decode from 'jwt-decode'



function eventsearchCard(props) {

    return (

       <div>
       <div>{props.event.event_title}</div>
        
        {props.event.event_date}
       </div>
       
    )
}
export default eventsearchCard;