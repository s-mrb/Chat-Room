import React, { useState } from "react";
import io from "socket.io-client";

const WINODW_LOCATION =
  process.env.REACT_APP_WINDOW_LOCATION || "localhost:5000";

let socket;
let opts = {
  transports: ["websocket", "polling", "flashsocket"],
};

const Join = () => {
  const [status, setStatus] = useState();

  socket = io(WINODW_LOCATION, opts);

  // async function
  socket.on("connect", () => {
    setStatus(socket.connected);
  });

  let html = status ? <h1>Connected</h1> : <h1>Not Connected</h1>;
  return html;
};

export default Join;
