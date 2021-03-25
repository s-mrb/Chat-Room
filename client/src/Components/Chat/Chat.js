import React from "react";
import io from "socket.io-client";
import "./Chat.css";
import ChatCard from "../ChatCard/ChatCard.jsx";
import { Component } from "react";

class Chat extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    name: "",
    room: "",
    status: false,
    socket: null,
    propNav: false,
  };

  async componentWillMount() {
    let properNav = this.props.location.aboutProps;
    document.body.style = "background: white";

    if (properNav) {
      await this.setState({ propNav: true });
      await this.setState({ name: this.props.location.aboutProps.name });

      await this.setState({ room: this.props.location.aboutProps.room });

      const WINODW_LOCATION =
        process.env.REACT_APP_WINDOW_LOCATION || "localhost:5000";

      let socket;
      let opts = {
        transports: ["websocket", "polling", "flashsocket"],
      };

      socket = io(WINODW_LOCATION, opts);
      this.setState({ socket: socket });

      // async function
      socket.on("connect", () => {
        this.setState({ status: socket.connected }, () => {
          this.state.socket.emit(
            "join",
            { name: this.state.name, room: this.state.room },
            () => {}
          );
        });
      });
    } else {
      this.setState({ propNav: false });
    }
  }



  //   Passing [] as the second argument, useEffect to behave like componentDidMount

  render() {
    return (
      <div className="outer_div">
        {this.state.propNav ? (
          this.state.status ? (
            <ChatCard userInfo={this.state} />
          ) : (
            <div>Connecting ...</div>
          )
        ) : (
          <div>Go to Login</div>
        )}
      </div>
    );
  }
}
export default Chat;
