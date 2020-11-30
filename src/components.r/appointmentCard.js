import React, { useState } from 'react';
import axios from 'axios';

function AppointmentCard(props) {
    const [customer, setCustomer] = useState('');

    axios.get('http://localhost:5000/users/' + props.reserv.cid)
        .then((response) => {
            console.log(response.data)
            setCustomer(response.data.first_name);
        });


    return (
        <tr>
            <td style={{fontSize:"10px"}}>{customer}</td>
            <td style={{fontSize:"10px"}}>{props.reserv.date}</td>
            <td style={{fontSize:"10px"}}>{props.reserv.time}</td>
            <td style={{fontSize:"10px"}}>{props.reserv.seats}</td>
        </tr>
    )
}

export default AppointmentCard;