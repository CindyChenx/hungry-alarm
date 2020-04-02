import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'


export default class RestaurantProfile extends Component {

    constructor() {
        super()
        this.state = {
          r_name: '',
          r_address: '',
          r_phone: '',
          errors: {}
        }
      }
    
      componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            r_name: decoded.r_name,
            r_address: decoded.r_address,
            r_phone: decoded.r_phone
        })
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
                    <td>Restaurant name</td>
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
          </div>
        )
      }
}