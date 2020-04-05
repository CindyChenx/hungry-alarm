import axios from 'axios'

export const register = newResturant => {
  return axios
    .post('http://localhost:5000/restaurants/register', {
      r_name: newResturant.r_name,
      r_phone: newResturant.r_phone,
      r_email: newResturant.r_email,
      r_password: newResturant.r_password,
      r_address: newResturant.r_address,
      r_zip: newResturant.r_zip,
      r_desciption: newResturant.r_desciption,
      r_pic: newResturant.r_pic,

    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = resturant => {
  return axios
    .post('http://localhost:5000/restaurants/login', {
      r_email: resturant.r_email,
      r_password: resturant.r_password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}


