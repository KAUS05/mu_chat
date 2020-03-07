import React, { Component } from "react";

import Slider from "react-slick";

import './Slider.css'

import face from '../../../../images/face.png'
import pic_one from '../../../../images/unnamed (4).png'
import pic_two from '../../../../images/unnamed (5).png'
import pic_three from '../../../../images/unnamed (6).png'
import pic_four from '../../../../images/unnamed (3).png'

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="Slider">
        <h5>Media</h5>
        <Slider {...settings}>
          <div className="Slider_items">
            <img src={ face } alt=""/>
          </div>
          <div className="Slider_items">
            <img src={ pic_one } alt=""/>
          </div>
          <div className="Slider_items">
            <img src={ pic_two } alt=""/>
          </div>
          <div className="Slider_items">
            <img src={ face } alt=""/>
          </div>
          <div className="Slider_items">
            <img src={ pic_three } alt=""/>
          </div>
          <div className="Slider_items">
            <img src={ pic_four } alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}