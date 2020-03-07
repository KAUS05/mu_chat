import React, { Component } from 'react'

import './Header.css'

import { Link } from 'react-router-dom'

// images
import whatsapp from '../../../images/whatsapp.png'
import face from '../../../images/unnamed (2).png'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/"><h1>Chatee</h1></Link>
        <div className="Header_links">
          <Link to="/chatscreen" className="whatsapp_icon">
            <div>41</div>
            <img src={ whatsapp } alt=""/>
          </Link>
          <i className="far fa-bell"></i>
          <img className="Header_img" src={ face } alt=""/>
        </div>
      </div>
    )
  }
}
