import React, { Component } from 'react';
import axios from 'axios';
import Card from './RestaurantCard';


export default class NewsEvent extends Component {

    constructor(props) {
        super(props);
        this.state = { restaurants: [] };
    }

    //got data from the database
    componentDidMount() {


        axios.get('http://localhost:5000/restaurants/eventdispaly')
            .then(response => {
                console.log(response.data.users)
                const restaurants = response.data.users;
                this.setState({ restaurants });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    companiesList() {
        return this.state.restaurants.map(currentrestaurant => {
            if (currentrestaurant.rid !== null) {
                return <Card key={currentrestaurant.rid} user={currentrestaurant} />;
            }
        })
    }

    render() {
        return (
            <div>
                {this.companiesList()}
            </div>
        );
    }
}