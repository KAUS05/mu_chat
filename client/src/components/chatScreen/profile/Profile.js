import React, { Component } from 'react'

import './Profile.css'

//image
import unnamed_two from '../../../images/unnamed (2).png'

//slider
import Slider from './Slider/Slider'

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="Profile_description">
          <img src={ unnamed_two } alt=""/>
          <h2>Darika Samak</h2>
          <span>Paris, France</span>
          <p>Help people to buld websites and apps + <br/> grow awareness in social media.</p>
        </div>

        <div className="Profile_data">
          <p><span>Phone :</span> <strong>+(33 1) 45 55 01 10</strong></p>
          <p><span>E-mail : </span><strong>info@uxdesigner.im</strong></p>
          <p><span>DOB : </span><strong>14.05.1992</strong></p>
        </div>

        <Slider />
      </div>
    )
  }
}
