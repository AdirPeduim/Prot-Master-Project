import React, { Fragment, FC, useState, useEffect } from "react";
import { withStyles, Button, Theme, TextField, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Page2 from "./LockersPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "./../history";

const HomePage: FC = () => {
  const PASSWORD = "123456";
  // const [isPassword, setIsPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const logInClicked = () => {
    if (password === PASSWORD) {
      history.push("/LockersPage");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <br />
      <br />
      <p style={{ fontSize: "50px" }}>Welcome to the system - port master!</p>
      <br />
      <br />
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          id="Password"
          label="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        {showAlert? <Alert variant="filled" severity="error">
          incorrect password — check it out!
        </Alert>: ""}
        
        <br />
        <Button variant="contained" size="large" onClick={logInClicked}>
          Log in
        </Button>
      </Grid>
    </>
  );
};

export default HomePage;
