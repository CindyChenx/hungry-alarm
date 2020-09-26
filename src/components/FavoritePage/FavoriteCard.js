import React, { Component } from 'react';
import axios from 'axios';


export default class FavoriteCard extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            rid: '',
            r_name: '',
            r_phone: '',
            r_address: '',
            r_zip: '',
            r_desciption: '',
            r_pic: '',
            
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/restaurants/' + this.props.favor.rid)
            .then(response => {
                this.setState({
                    rid: response.data.rid,
                    r_name: response.data.r_name,
                    r_phone: response.data.r_phone,
                    r_address: response.data.r_address,
                    r_zip: response.data.r_zip,
                    r_desciption: response.data.r_desciption,
                    r_pic: response.data.r_pic
                    })
                // console.log(response.data)
                // const favorites = response.data;
                // this.setState({ favorites });
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.r_pic} alt=""/>
                <h1>{this.state.r_name}</h1>
                <h1>{this.state.r_phone}</h1>
                <h1>{this.state.r_address}</h1>
                <h1>{this.state.r_desciption}</h1>
                <button>delete favorate</button>
            </div>
        )
    }
}
