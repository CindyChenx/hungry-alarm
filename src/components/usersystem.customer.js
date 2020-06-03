import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom';
import style from "./customerProfile.module.css";
import axios from "axios"


export default class UserSystem extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    axios.get('http://localhost:5000/users/' + decoded.id)
      .then(response => {
        this.setState({
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          phone: response.data.phone,
          email: response.data.email,
          password:response.data.email
        })
      })

    // componentDidMount() {
    //   const token = localStorage.usertoken
    //   const decoded = jwt_decode(token)
    //   this.setState({
    //     first_name: decoded.first_name,
    //     last_name: decoded.last_name,
    //     email: decoded.email
    //   })
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
                  <td>Fist Name</td>
                  <td>{this.state.first_name}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{this.state.last_name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style.container}>
            <header className={style.headerContainer}>
              <div className={style.profilePhotoContainer}>
                <img
                  className={style.profilePhoto}
                  src='https://metabolicdevices.com/wp-content/uploads/2017/04/person-4.jpg'
                  alt='customer profile'
                />
              </div>
              <div className={style.userInfoContainer}>
                <h1 className={style.heading1}>{this.state.first_name} {this.state.last_name}</h1>
                <h3 className={style.heading3}>Brooklyn, NY</h3>
                <span>
                  <Link className={style.editButton} to={"/user/edit/" + this.state.id}>Edit</Link>
                </span>
              </div>
            </header>
            <main className={style.mainContainer}>
              <div className={style.preferencesContainer}>
                <h2 className={style.heading2}>Preferences</h2>
                <div className={style.rowContainer}>
                  <div className={style.tag}>Bar</div>
                  <div className={style.tag}>American</div>
                  <div className={style.tag}>Japanese</div>
                  <div className={style.tag}>Noodle</div>
                  <button className={style.addTagButton}>+</button>
                </div>
              </div>
              <div className={style.couponContainer}>
                <div className={style.rowContainer}>
                  <h2 className={style.heading2}>Coupons</h2>
                  <button className={style.button}>View All</button>
                </div>
                <div className={style.coupons}>
                  <div className={style.coupon}></div>
                  <div className={style.coupon}></div>
                  <div className={style.coupon}></div>
                  <div className={style.coupon}></div>
                </div>
              </div>
              <div className={style.favoriteContainer}>
                <div className={style.rowContainer}>
                  <h2 className={style.heading2}>Favorites</h2>
                  <button className={style.button}>View All</button>
                </div>
                <div className={style.favorites}>
                  <div className={style.favorite}></div>
                  <div className={style.favorite}></div>
                  <div className={style.favorite}></div>
                  <div className={style.favorite}></div>
                </div>
              </div>
            </main>
            <footer className={style.footerContainer}>
              <button className={style.squareButton}>
                <img
                  className={style.iconButton}
                  src='https://getdrawings.com/free-icon-bw/friend-request-icon-21.png'
                  alt='invite friend icon'
                />
                <p>Invite Friend</p>
              </button>
              <button className={style.squareButton}>
                <img
                  className={style.iconButton}
                  src='https://cdn4.iconfinder.com/data/icons/male-user/100/30-1User_2-512.png'
                  alt='customer service icon'
                />
                <p>Customer Service</p>
              </button>
            </footer>
          </div>
        </div>
      )
    }
  }