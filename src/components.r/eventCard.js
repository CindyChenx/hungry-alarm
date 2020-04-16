import React from 'react';
import style from './eventCard.module.css'

function eventCard(props) {
    return (
        <div className= {style.eventcontainer}>
            <img className={style.eventImg} src="https://images.squarespace-cdn.com/content/v1/5952613cf5e2317781f0601c/1514384334811-UR0RKU7V9R8BR0AG9BFW/ke17ZwdGBToddI8pDm48kA3CdFQrw9uyrfgw9IieNbhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyzqBq3i7xPFQ5ak81xQmRGfzLvMXrgStyxzv2BdT2eG889UAXQAt2vx13GpVXxdg4/decade+of+champions.jpg?format=1500w" alt="" />
            <h1 className={style.eventName}>happy hour</h1>
            <h5 className={style.eventTime}>10:00pm-2:00am</h5>
        </div>
    )
}

export default eventCard;