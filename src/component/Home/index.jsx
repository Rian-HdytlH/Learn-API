import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
      	 <Link to="masuk" className="link">Masuk</Link>
      	 <Link to="daftar" className="link">Daftar</Link>
         <Link to="event" className="link">Event</Link>
      </div>
    );
  }
}

export default Home;