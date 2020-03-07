import React, { Component } from 'react'
import axios from 'axios'

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'

import './App.css'

// screens

import LoginPage from './login/loginPage/LoginPage'
import ChatScreen from './chatScreen/ChatScreen'
import NoInfo from './noinfo/NoInfo'

export default class App extends Component {
  state = {
    get_whatsapp_list_for_panel: [],
    get_whatsapp_list_not_read: [],
    whatsapp_data: []
  }
  componentDidMount() {    
     
    fetch('https://app.meetuniversity.com/Api_new/get_whatsapp_list_for_panel/format/json?client_id=whatsapp&key=c4f79e15f8c6ed0715a8ea44aebc38d8')
      .then(response => response.json())
      .then(json => this.setState({ get_whatsapp_list_for_panel: [...this.state.get_whatsapp_list_for_panel, JSON.parse(json.response) ] }))
      // .then(json => console.log(JSON.parse(json.response)))


    // get_whatsapp_list_for_panel
    axios.get('https://app.meetuniversity.com/Api_new/get_whatsapp_list_for_panel/format/json?client_id=whatsapp&key=c4f79e15f8c6ed0715a8ea44aebc38d8')
      .then(res => res)
      // .then(res => console.log(res.data['response'], ' res')) 
      // .then(res => console.log(JSON.parse(res.data.response), 'get_whatsapp_list_for_panel'))
      // .then(res => this.setState({ get_whatsapp_list_for_panel: [res.data['response'] ]}))   


    // get_whatsapp_list_not_read
    axios.get('https://app.meetuniversity.com/Api_new/get_whatsapp_list_not_read/format/json?client_id=whatsapp&key=c4f79e15f8c6ed0715a8ea44aebc38d8')
      .then(res => res)
      // .then(res => console.log(res.data, 'get_whatsapp_list_not_read'))
      // .then(res => this.setState({ get_whatsapp_list_not_read: [...this.get_whatsapp_list_not_read, res.data] }))   

    //whatsapp_data
    axios.get('https://app.meetuniversity.com/Api_new/whatsapp_data/format/json?client_id=whatsapp&key=c4f79e15f8c6ed0715a8ea44aebc38d8')
      .then(res => res)
      // .then(res => console.log(res.data.response, ' whatsapp_data'))
      // .then(res => this.setState({ whatsapp_data: [...this.state.whatsapp_data, res.data.response] }))   
  }
  render() {
    // console.log(this.state.get_whatsapp_list_for_panel[0], ' state');
    const test = this.state.get_whatsapp_list_for_panel[0]
    // typeof(test)
    // test.forEach(i => {
    //     console.log(i.message)
    // })
    // console.log(test, 'test')
    // this.state.get_whatsapp_list_for_panel[0].forEach(i => {
    //   console.log(i.message, ' message');
    // })

    // const items = this.state.get_whatsapp_list_for_panel[0]
    // console.log(items);
    this.state.get_whatsapp_list_for_panel.map(item => {
      // console.log( item.message );
    })

    const obj_one = {
      people: [
       { name: 'AAA', age: 21 },
       { name: 'BBB', age: 31 },
       { name: 'CCC', age: 41 },
       { name: 'DDD', age: 51 }
      ],
      place: [
        { name: 'EEE', location: 'East'},
        { name: 'FFF', location: 'West'},
        { name: 'GGG', location: 'North'},
        { name: 'HHH', location: 'South'}
      ]
    }
 
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/chatscreen" component={ ChatScreen }/>
            <Route path="/noinfo" component={ NoInfo }/>
            <Route exact path="/" component={ LoginPage }/>
            <Route component={ LoginPage }/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
