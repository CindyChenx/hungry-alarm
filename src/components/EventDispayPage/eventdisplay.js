import React, { Component } from 'react';
import axios from 'axios';
import Card from './searcheventCard';

function searchingFor(term) {
    return function(x) {
        return x.event_title.toLowerCase().includes()
    }
}

export default class NewsEvent extends Component {

    constructor(props) {
        super(props);
        this.updateSearch = this.updateSearch.bind(this)

        this.state =
        {
            eventsearch: [],
            search: ""
        };
    }

    //got data from the database
    componentDidMount() {

        axios.get('http://localhost:5000/restaurants/events/allevent')
            .then(response => {
                console.log(response.data)
                const eventsearch = response.data;
                this.setState({ eventsearch: eventsearch });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    updateSearch(e) {
        this.setState({ search: e.target.value });
    }


    allEventList() {
    
        return this.state.eventsearch.map(currentEvent => {
            return <Card key={currentEvent.event_id} event={currentEvent} />;
        })
    }

    render() {
        
        return (
            <div>
                <form >
                <input type="text" value={this.state.search} onChange={this.updateSearch} placeholder="Search.." />
                </form>
                <div>{this.allEventList()}</div>
                

            </div>
        );
    }
}

