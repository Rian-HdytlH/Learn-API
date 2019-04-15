import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import Foto from './profile1.png'; 

class Login extends Component {
  state = {
    username : '',
    password : ''
  }

  handleChange = (event) => {
    this.setState ({
      [event.target.name] : event.target.value
      })
  }

  handleSubmit = (event) => {
  event.preventDefault()
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(data)

  let url = "https://superdonor.herokuapp.com/api/pmi/masuk"

  axios.post( url , data )
  .then((res)=>{
        console.log(res)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
    })
    .catch((err) =>{
        console.log(err.response)
      })

  }

  render() {
    console.log(this.state)
    return (
      <div className="login">
      <img src = {Foto}/>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Username :</p>
            <input onChange={this.handleChange} name="username" type="text" placeholder="Username" className="user" /><br/>
          <p>Password :</p>
            <input onChange={this.handleChange} name="password" type="password" placeholder="Password" className="pass"/><br/>
            <button type="submit" className="btn">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
