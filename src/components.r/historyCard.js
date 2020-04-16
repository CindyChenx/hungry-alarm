import React from 'react';

function historyCard(props){
    return (
        <tr>
            <td>{props.history.id}</td>
            <td>{props.history.amount}</td>
            <td>{props.history.data}</td>
        </tr>
    )
}
export default historyCard;