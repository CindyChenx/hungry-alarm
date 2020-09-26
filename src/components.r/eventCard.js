import React from 'react';
import style from './eventCard.module.css'
import { Link } from 'react-router-dom';

function eventCard(props) {
    return (
        <div className={style.eventcontainer}>
        <Link className={style.editButton} to={"/restaurant/joinevent/" + props.event.event_id}>
            <img className={style.eventImg} src={props.event.event_picture} alt="event piture" />
                <h1 className={style.eventName}>{props.event.event_title}</h1>
                <h5 className={style.eventDate}>{props.event.event_date}</h5>
                <h5 className={style.eventTime}>{props.event.start_time} - {props.event.end_time}</h5>
        </Link>
        </div>
    )
}

export default eventCard;