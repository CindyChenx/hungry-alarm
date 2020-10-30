import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components.r/eventCard';


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
        let filteredEvent = this.state.eventsearch.filter(
            (eventsearch) => {
                console.log(eventsearch.event_title.toLowerCase().includes(this.state.search.toLowerCase() != -1))
                return eventsearch.event_title.toLowerCase().includes(this.state.search.toLowerCase())
            }
        )

        return filteredEvent.map(currentEvent => {
            return <Card key={currentEvent.event_id} event={currentEvent} />;
        })
    }



    render() {

        return (
            <div>

                <form className="md-form active-cyan active-cyan-2 mb-3">
                    <input type="text" className="form-control" value={this.state.search} onChange={this.updateSearch} placeholder="Search.." />
                </form>
                <div>{this.allEventList()}</div>


            </div>
        );
    }
}

