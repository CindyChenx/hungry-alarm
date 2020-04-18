import React, { Component } from 'react';
import style from './eventspage.module.css';
import Card from './eventCard'



export default class RestaurantEvent extends Component {


    render() {
        return (
            <div className= {style.create}>
                <img className={style.titlepic} src="https://cdn.dribbble.com/users/454118/screenshots/6989160/open_bar_tavern_dribbble.jpg" alt="bar logo"/>
                <button className={style.creatEventbt}>New event</button>
                <Card />


            </div>
        )
    }
}