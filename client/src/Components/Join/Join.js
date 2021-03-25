import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from './style'
import "./Join.css";

const Join = () => {
  const [name, SetName] = useState();
  const [room, SetRoom] = useState();
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.main_grid}
    >
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Name"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
          color="secondary"
          onChange={(e) => SetName(e.target.value)}
          className={classes.textField}

        />
        <div></div>
        <TextField
          id="standard-basic"
          label="Room"
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.input,
          }}
          color="secondary"
          onChange={(e) => SetRoom(e.target.value)}
          className={classes.textField}
          />
        <div></div>

        <Link
          to={{
            pathname: "/chat",
            aboutProps: { name: name, room: room },
          }}
        >
          <Button
            className={classes.button}
          >
            Join
          </Button>
        </Link>
      </form>
    </Grid>
  );
};

export default Join;
