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
          <header className={style.headerContainer}>
            <div className={style.logoContainer}>
              <img
                className={style.logo}
                src='data:image/jpeg;base64,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'
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
              <h1 className={style.heading1}>Takeshi Sushi</h1>
              <p className={style.address}>28 Grand Street New York, NY 10013</p>
              <p className={style.phone}>(917) 675-0771</p>
              <p className={style.description}>
                An omakase (from the Japanese phrase “I’ll leave it up to you”) is
                a prix fixe sushi meal, personally crafted daily by the chef. Chef
                Takeshi sources and presents the season’s best offerings through
                multiple courses with the style and execution that allows for the
                purity of the ingredients to come forth.
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