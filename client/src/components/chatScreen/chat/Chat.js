import React, { Component } from "react";

import axios from "axios";

import "./Chat.css";

//images
import unnamed from "../../../images/unnamed.png";
import unnamed_one from "../../../images/unnamed (1).png";

export default class Chat extends Component {
  state = {
    user_msg: "",
    user_msg_list: [],
    user_msg_received: [],
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.user_msg.length === 0) {
      return false;
    }

    axios.get(
      `https://app.meetuniversity.com/Api_new/send_whatsapp/format/json?client_id=whatsapp&key=c4f79e15f8c6ed0715a8ea44aebc38d8&phone=919124404747&template=${this.state.user_msg}`,
    );
    // .then(res => console.log(res))
    // .catch(err => console.log(err));

    this.setState({
      user_msg_list: [...this.state.user_msg_list, this.state.user_msg],
      user_msg: "",
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    $(".media").click(function() {
      $("input[type='file']").trigger("click");
    });

    $('input[type="file"]').on("change", function() {
      var val = $(this).val();
      $(this)
        .siblings("span")
        .text(val);
    });

    axios
      .get(
        "https://app.meetuniversity.com/Api_new/whatsapp_data/format/json?client_id=whatsapp&key=c4f79e15f8c6ed0715a8ea44aebc38d8",
      )
      .then(res => res)
      // .then(res =>
      //   this.setState({
      //     user_msg_received: [
      //       ...this.state.user_msg_received,
      //       ...eval(JSON.parse(res.data.response)),
      //     ],
      //   }),
      // );
    // .then(res => console.log(JSON.parse(res.data.response).whatsapp_list, ' whatsapp data'))
    .then(res => this.setState({ user_msg_received: [...this.state.user_msg_received, ...JSON.parse(res.data.response).whatsapp_list] }))
  }
  render() {

    console.log(this.state.user_msg_received, " state");
    return (
      <div className="Chat">
        <div className="Chat_header">
          <div className="Chat_header_img">
            <img src={unnamed} alt="" />
            <div className="Chat_header_img_text">
              <div className="Chat_user_name">Darika Samak</div>
              <span className="Chat_user_status">status</span>
            </div>
          </div>
          <div className="Chat_header_icon">
            <i className="fas fa-phone-volume"></i>
            <i className="fas fa-volume-mute"></i>
            <i className="fas fa-video"></i>
          </div>
        </div>

        <div className="Chat_messages">
          {
            this.state.user_msg_received.map(i => <p key={ i.id }> <strong>From : { i.phone }</strong> <br/> { i.message }</p> )
          }
          {this.state.user_msg_list.map((msg, i) => {
            return (
              <div key={i}>
                <p className="msg_sent">{msg}</p>
              </div>
            );
          })}
        </div>
        <div className="Chat_input">
          <div className="Chat_input_content">
            <img src={unnamed_one} alt="" />
            <div className="Chat_input_items">
              <div className="Chat_input_media">
                <i className="fa fa-paperclip media"></i>
                <span className="name"></span>
                <input type="file" name="" id="" />
              </div>
              <form action="" onSubmit={this.handleSubmit}>
                <input
                  autoFocus
                  type="text"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={this.state.user_msg}
                  name="user_msg"
                  placeholder="Enter Text"
                  id=""
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
