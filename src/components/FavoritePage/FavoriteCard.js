import React, { Component } from 'react';
import axios from 'axios';
import style from './favoriteCard.module.css';


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
            <div className={style.cardContainer}>
                <img className={style.thumbnailPic} src={this.state.r_pic} alt='' />
                <div className={style.infoBox}>
                  <h1 className={style.title}>{this.state.r_name}</h1>
                  <h2 className={style.subtitle}>{this.state.r_phone}</h2>
                  <h2 className={style.subtitle}>
                    {this.state.r_address} {this.state.r_zip}
                  </h2>
                  <div className={style.descriptionBox}>
                    <p className={style.resDescription}>{this.state.r_desciption}</p>
                  </div>
                  <button className={style.deleteFavButton}>Delete favorite</button>
                </div>
              </div>
        )

        
    }
}
