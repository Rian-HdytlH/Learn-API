import React, { Component } from 'react';
import './list.css';

class List extends Component {
    render() {
        return (
            <div className="list">
            <h1 style={{color:"green"}}>List Event</h1>
            <form onSubmit={this.handleSubmit}>
            <p>Tanggal :</p>
              <input onChange={this.handleChange} name="tanggal" type="text" placeholder="Tanggal"/><br/>
            <p>Penanggung Jawab :</p>
              <input onChange={this.handleChange} name="penanggung_jawab" type="text" placeholder="Penanggung Jawab"/><br/>
            <p>Deskripsi :</p> 
              <input onChange={this.handleChange} name="deskripsi" type="text" placeholder="Deskripsi"/><br/>
            <p>Tempat :</p>
              <input onChange={this.handleChange} name="tempat" type="text" placeholder="Tempat"/><br/>
            <p>Kota :</p>
              <input onChange={this.handleChange} name="kota" type="text" placeholder="Kota"/><br/>
            <p>Judul :</p>
              <input onChange={this.handleChange} name="judul" type="text" placeholder="Judul"/><br/>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        );
    }
}

export default List;