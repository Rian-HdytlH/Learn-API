import React, { Component } from 'react';
import './register.css';
import axios from 'axios';

class Register extends Component {
  state = {
    username: '',
    nama_cabang: '',
    telepon: '',
    password: ''
  }
handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
      })
}

handleSubmit = (event) => {
  event.preventDefault()
  let data = {
    username: this.state.username,
    nama_cabang: this.state.nama_cabang,
    telepon: this.state.telepon,
    password: this.state.password
  }
  console.log(data)

  let url = "https://superdonor.herokuapp.com//api/pmi/daftar"

  axios.post( url , data )
  .then((res)=>{
        console.log(res)
    })
    .catch((err) =>{
        console.log(err)
      })

}

  render() {
    console.log(this.state)
    return (
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="nama_cabang" type="text" placeholder="Nama Cabang"/><br/>
          <input onChange={this.handleChange} name="username" type="text" placeholder="Username"/><br/>
          <input onChange={this.handleChange} name="telepon" type="text" placeholder="Telepon"/><br/>
          <input onChange={this.handleChange} name="password" type="password" placeholder="Password"/><br/>
          <button type="submit">Daftar</button>
        </form>
      </div>
    );
  }
}

export default Register;
