import React, { Component } from 'react'

import './NoInfo.css'

import axios from 'axios'

//header
import Header from '../partials/header/Header'

//images
import info from '../../images/info.png'

export default class NoInfo extends Component {
  // state = 
  // componentDidMount() {
  //   axios.get('https://app.meetuniversity.com/Api_new/get_whatsapp_list_not_read/format/json?client_id=whatsapp&key=c4f79e15f8c6ed0715a8ea44aebc38d8')
  //     .then(res => res)
  //     .then(res => console.log(JSON.parse(res.data.response), ' no read'))
  // }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="NoInfo">
          <div className="NoInfo_content">
            <img src={ info } alt=""/>
            <p>No information available</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
