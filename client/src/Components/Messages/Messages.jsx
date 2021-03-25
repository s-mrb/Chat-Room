import React from "react";
import Message from "../Message/Message";
import "./Messages.css";
const Messages = ({ messages, name }) => (
  <div className="messages">
    {messages.map((message) => (
      <div key={message.id}>
        <Message message={message} name={name} />
      </div>
    ))}
  </div>
);

export default Messages;
