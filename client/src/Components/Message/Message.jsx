import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import useStyles from "./style";
const Message = ({ message, name }) => {
  const classes = useStyles();

  return message.name === name ? (
    <div className={classes.div}>
      <p className={classes.p_from_r}>You</p>
      <p className={classes.p_message_r}>
        <TextareaAutosize
          value={message.text}
          contentEditable="false"
          disabled={true}
          className={classes.textArea_message}
          suppressContentEditableWarning="true"
        ></TextareaAutosize>
      </p>
    </div>
  ) : (
    <div style={{ marginTop: "3%" }}>
      <p className={classes.p_from_l}>{message.name}</p>
      <p className={classes.p_message_l}>
        <TextareaAutosize
          value={message.text}
          resize="false"
          contentEditable="false"
          disabled={true}
          style={{
            background: "transparent",
            resize: "none",
            border: "none",
            color: "black",
          }}
          suppressContentEditableWarning="true"
        ></TextareaAutosize>
      </p>
    </div>
  );
};

export default Message;
