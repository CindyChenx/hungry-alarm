import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import style from "./RestaurantProfile.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { decode } from 'punycode';

export default class RestaurantProfile extends Component {

  constructor() {
    super();

    this.state = {
      rid: '',
      r_name: '',
      r_phone: '',
      r_address: '',
      r_zip: '',
      r_desciption: '',
      r_pic: '',
      // errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    axios.get('http://localhost:5000/restaurants/'+ decoded.rid)
    .then(response =>{
      this.setState({
      rid: response.data.rid,
      r_name: response.data.r_name,
      r_phone: response.data.r_phone,
      r_address: response.data.r_address,
      r_zip: response.data.r_zip,
      r_desciption: response.data.r_desciption,
      r_pic: response.data.r_pic
      })
    })

    // const token = localStorage.usertoken
    // const decoded = jwt_decode(token)
    // this.setState({
    //   rid: decoded.rid,
    //   r_name: decoded.r_name,
    //   r_phone: decoded.r_phone,
    //   r_address: decoded.r_address,
    //   r_zip: decoded.r_zip,
    //   r_desciption: decoded.r_desciption,
    //   r_pic: decoded.r_pic
    // })
  }
  componentDidUpdate(prevProps, props) {

    if (this.props.r_name !== prevProps.r_name ||
      this.props.r_phone !== prevProps.r_phone ||
      this.props.r_address !== prevProps.r_address ||
      this.props.r_zip !== prevProps.r_zip ||
      this.props.description !== prevProps.r_desciption ||
      this.props.r_pic !== prevProps.r_pic) {

      axios.get('http://localhost:5000/restaurants/' + decode.rid)
        .then(response => {
          this.setState({
            r_name: response.data.r_name,
            r_phone: response.data.r_phone,
            r_email: response.data.r_email,
            r_password: response.data.r_password,
            r_address: response.data.r_address,
            r_zip: response.data.r_zip,
            r_desciption: response.data.r_desciption,
            r_pic: response.data.r_pic,
          })
        })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Restaurant</td>
                <td>{this.state.r_name}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{this.state.r_address}</td>
              </tr>
              <tr>
                <td></td>
                <td>{this.state.r_phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <header 
          style={{
            background:`url(${this.state.r_pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "auto",
            height: "500px",
          }}>
            <div className={style.logoContainer}>
              <img
                className={style.logo}
                src= {this.state.r_pic}
                alt='restaurant logo'
              />
            </div>
          </header>
          <main className={style.mainContainer}>
            <div className={style.rowContainer}>
              <h2 className={style.heading2}>Restaurant Page</h2>
              {/* <button className={style.editButton}>Edit</button> */}
              <Link className={style.editButton} to={"/restaurant/profileEdit/" + this.state.rid}>Edit</Link>
            </div>
            <div className={style.basicInfoContainer}>
              <h1 className={style.heading1}>{this.state.r_name}</h1>
              <p className={style.address}>{this.state.r_address}</p>
              <p className={style.phone}>{this.state.r_phone}</p>
              <p className={style.description}>
                {this.state.r_desciption}
            </p>
            </div>
            <div className={style.tagContainer}>
              <h2 className={style.heading2}>Searching Tags</h2>
              <div className={style.rowContainer}>
                <div className={style.tag}>Japanese</div>
                <div className={style.tag}>Sushi</div>
                <div className={style.tag}>Omakase</div>
                <button className={style.addTagButton}>+</button>
              </div>
            </div>
            <div className={style.detailContainer}>
              <div className={style.rowContainer}>
                <h2 className={style.heading2}>Restaurant Detail</h2>
                <button className={style.editButton}>Edit</button>
              </div>
              <h3 className={style.heading3}>Open Hours</h3>
              <div className={style.hour}>
                <p>Monday</p>
                <p>12:00 PM - 10:00 PM</p>
                <p>Tuesday</p>
                <p>12:00 PM - 10:00 PM</p>
                <p>Wednesday</p>
                <p>12:00 PM - 10:00 PM</p>
                <p>Thursday</p>
                <p>12:00 PM - 10:00 PM</p>
                <p>Friday</p>
                <p>12:00 PM - 10:00 PM</p>
                <p>Saturday</p>
                <p>12:00 PM - 10:00 PM</p>
                <p>Sunday</p>
                <p>12:00 PM - 10:00 PM</p>
              </div>
              <h3 className={style.heading3}>Capacity : 23</h3>
              <h3 className={style.heading3}>Menu :</h3>
              <img
                className={style.menuPhoto}
                src='https://codehs.com/uploads/660f77e23cb4b77e980485e601300bab'
                alt='menu'
              />
              <h3 className={style.heading3}>Photos :</h3>
              <div className={style.photo}>
                <img
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/od6mA-tnGdYHRph4rAddfw/o.jpg'
                  alt='restaurant and food'
                />
                <img
                  src='https://images.squarespace-cdn.com/content/v1/5ba81986b91449215ec286e3/1584038382729-8OK607T7FDOPP1JN1ZWL/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=500w'
                  alt='restaurant and food'
                />
                <img
                  src='https://images.squarespace-cdn.com/content/v1/5ba81986b91449215ec286e3/1583425885955-PXAED4EO2K6PZG30SGMA/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=500w'
                  alt='restaurant and food'
                />
                <img
                  src='https://images.squarespace-cdn.com/content/v1/5ba81986b91449215ec286e3/1583858991477-35NXKMRHPJ9J85QPI1GO/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=500w'
                  alt='restaurant and food'
                />
                <img
                  src='https://images.squarespace-cdn.com/content/v1/5ba81986b91449215ec286e3/1583613648667-J2GPDIVFPMAD76RHWC4K/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=500w'
                  alt='restaurant and food'
                />
                <img
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/v1byyfSUkg6YOXY8wsbgYg/o.jpg'
                  alt='restaurant and food'
                />
                <img
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/-N7-XUE6LAVqLL-i5LrgTg/o.jpg'
                  alt='restaurant and food'
                />
                <img
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/BZMX8XmZzYFnJhQjanIbsg/o.jpg'
                  alt='restaurant and food'
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}