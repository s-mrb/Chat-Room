import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

import { Grid, Typography } from "@material-ui/core";
import Messages from "../Messages/Messages";
import ScrollableFeed from "react-scrollable-feed";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SendIcon from "@material-ui/icons/Send";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./ChatChard.css";
import { v4 as uuidv4 } from "uuid";

import useStyles from "./style";

export default function ChatCard(props) {
  const classes = useStyles();
  const [name, setName] = useState(props.userInfo.name);
  const [room, setRoom] = useState(props.userInfo.room);
  const [socket, setSocket] = useState(props.userInfo.socket);
  const [isEmpty, setisEmpty] = useState(true);

  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  const [received_msg, setReceived_msg] = useState();
  const [alt, setAlt] = useState()

  // You right now running this effect every time messages change, and it does change when you have types a message. Or
  // When you receive a message then one listener of socket is created to listen new message event
  // and when new message comes then all the listeners fire together to do re render.
  // useEffect(() => {
  //   props.userInfo.socket.on("message", (message) => {
  //     setMessages([...messages, message]);
  //     console.log("ah");
  //   });
  //   console.log("Socket message event Listener Created!!");
  // }, [messages]);

  
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev)=>{
        return [...prev,msg]
      });
      console.log("New Listener")
    });

  }, []);

  


  const handleMessage = () => {
    var id = uuidv4();
    setMessages([...messages, { text: message, name, id: id }]);
    socket.emit("message", { id: id, name: name, text: message, room: room });
  };

  const handleLeave = () => {
    socket.emit("leave", { name: name, room: room });
    socket.off();
  };

  return (
    <Grid container className={classes.top_container}>
      <Card className={classes.top_card}>
        <p className={classes.p_backArrow}>
          <Link to="/" onClick={handleLeave}>
            <ArrowBackIcon style={{ color: "white" }} />
          </Link>
        </p>

        <div className={classes.div_roomIcon}>
          <FiberManualRecordIcon className={classes.Roomicon} />
          <Typography variant="h6">{room}</Typography>
        </div>
      </Card>
      <Card className={classes.mid_card}>
        <ScrollableFeed forceScroll="true">
          <Messages messages={messages} name={name} />
        </ScrollableFeed>
      </Card>
      <Grid container className={classes.bottom_card}>
        <Card className={classes.input_textAreaCard}>
          <TextareaAutosize
            name="textarea"
            className="messageInput"
            bubbles="false"
            contentEditable="true"
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                handleMessage();
                setisEmpty(true);
                document.getElementsByClassName("messageInput").innerHTML = "";

                setMessage("");
              } else {
                setisEmpty(false);
              }
            }}
            onKeyUp={(event) => {
              if (event.code === "Enter") {
                setMessage("");
                setisEmpty(true);
              }
            }}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            value={isEmpty ? "" : message}
            className={classes.inputTextArea}
            suppressContentEditableWarning="true"
          ></TextareaAutosize>
        </Card>
        <p className={classes.p_sendIcon}>
          {(message && message.length > 0 && (
            <a
              onClick={() => {
                handleMessage();
                setisEmpty(true);

                setMessage("");
              }}
            >
              <SendIcon className={classes.active_sendIcon} />
            </a>
          )) || (
            <a
              onClick={() => {
                handleMessage();
                setisEmpty(true);
                setMessage("");
              }}
            >
              <SendIcon />
            </a>
          )}
        </p>
      </Grid>
    </Grid>
  );
}
