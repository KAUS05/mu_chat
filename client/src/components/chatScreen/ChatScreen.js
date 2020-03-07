import React, { Component } from "react";

import "antd/dist/antd.css";

import "./ChatScreen.css";

import axios from 'axios'

//header
import Header from '../partials/header/Header'

import { Layout, Menu, Icon, Input } from "antd";

const { Search } = Input;
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

//
import Chat from "./chat/Chat";
import Profile from "./profile/Profile";

export default class Home extends Component {
  state = {
    collapsed: false,
    people_list: []
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentDidMount() {
    axios.get('https://app.meetuniversity.com/Api_new/get_whatsapp_list_for_panel/format/json?client_id=whatsapp&key=c4f79e15f8c6ed0715a8ea44aebc38d8')
      .then(res => res)
      // .then(res => console.log(JSON.parse(res.data.response), ' panel'))
      // .then(res => console.log(eval(JSON.parse(res.data.response)), ' panel'))
      .then(res => this.setState({ people_list: [...this.state.people_list, ...eval(JSON.parse(res.data.response))] }))
  }

  render() {
    // console.log(this.state.people_list, ' state');
    return (
      <React.Fragment>
        <Header />
        <Layout style={{ minHeight: "100vh", border: "" }}>
          <Sider width={200} className="Sider">
            <div
              style={{
                border: "",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                margin: "10px 0",
              }}
            >
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: "90%" }}
              />
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={[""]}
              defaultOpenKeys={[""]}
              style={{ height: "100%" }}
              id="scrollbar-custom"
            >

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    People
                  </span>
                }
              >
              {
                this.state.people_list.map( people => people.userName ? <Menu.Item key={ Math.random()}>{ people.userName }</Menu.Item> : <Menu.Item key={ Math.random()}>name not defined</Menu.Item> )
              }
                {/* <Menu.Item key="5">Ram</Menu.Item>
                <Menu.Item key="6">Shyam</Menu.Item>
                <Menu.Item key="7">Karan</Menu.Item> */}
              </SubMenu>
              {/* <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="eye-invisible" />
                    Unseen
                  </span>
                }
              >
                <Menu.Item key="1">Tom</Menu.Item>
                <Menu.Item key="2">Bill</Menu.Item>
                <Menu.Item key="3">Alex</Menu.Item>
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                margin: "0 12px 0 30px",
                border: "",
                display: "flex",
                alignItems: "",
                justifyContent: "space-between",
              }}
            >
              <Chat />
              <Profile />
            </Content>
          </Layout>
        </Layout>
        <Footer className="Footer" style={{ textAlign: "center" }}>
          Chat App © 2020
        </Footer>
      </React.Fragment>
    );
  }
}
