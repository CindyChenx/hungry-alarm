import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Card from './FavoriteCard'



export default class Favorite extends Component {
    


    constructor(props) {
        super(props);
        
        this.delectFavorite = this.delectFavorite.bind(this)
        this.state = { 
            favorites: [],
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        axios.get('http://localhost:5000/users/favorite/' + decoded.id)
            .then(response => {
                // console.log(response.data)
                const favorites = response.data;
                this.setState({ favorites });
            })
            .catch(error => {
                console.log(error)
            })
    }

    FavoriteList(){
        return this.state.favorites.map(currentfavorite =>{
            return <Card key = {currentfavorite.rid} favor= {currentfavorite} delectFavorite = {this.delectFavorite}/>
    
        });
    }

    delectFavorite(rid){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        console.log(decoded.id)
        console.log(rid)
        axios.delete('http://localhost:5000/users/favorite/delete/'+decoded.id+'/'+ rid )
        .then(res => {
            console.log(res.data);
        })
        .catch(err =>{
            console.log(err)
        })

        this.setState({
            favorites: this.state.favorites.filter(el => el.rid != rid)
        })
    }

    render() {
        return (
            <div>
                <div className='row'>
                    {this.FavoriteList()}    
                </div>

            </div>
        );
    }
}