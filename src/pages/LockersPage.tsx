import React, { FC, useState } from "react";
import {
  TextField,
  withStyles,
  Button,
  Grid,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core";
import HomePage from "./HomePage";
import Sharat from "./sharat.png";
import AddNewLocker from "../addDetiles/AddLocker";
import AddLocker from "../addDetiles/AddLocker";
import { Locker } from "../Entities/Locker";
import history from "./../history";
import { Link } from "react-router-dom";
import EnterIcon from "@material-ui/icons/FormatAlignCenter";

interface MyProps {
  classes: any;
}

const styles = {
  media: {
    background: "rgba(0, 0, 0, 0)",
    height: "200px",
    width: "150px",
    backgroundRepeat: "round",
  },
};

const LockersPage: FC<MyProps> = ({ classes }) => {
  const [lockerName, setLockerName] = useState("");
  const [lockerSerial, setLockerSerial] = useState("");
  const [lockerList, setLockerList] = useState<Locker[]>([]);

  const useEffect = () => {};

  const addNewLocker = () => {
    let isNameInUse = false;
    for (let item in lockerList) {
      if (lockerList[item].name === lockerName) isNameInUse = true;
    }
    if (isNameInUse) {
      alert("The name you selected is already in use!");
    } else if (lockerName != "" && lockerSerial != "") {
      let temp = lockerList;
      temp.push(new Locker(lockerName, lockerSerial));
      setLockerList(temp);
      setLockerName("");
      setLockerSerial("");
      isNameInUse = false;
      //console.log(lockerList);
    } else {
      alert("Enter details, do not be stupid!!");
    }
  };

  return (
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Grid
        item
        container
        xs={6}
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <p style={{ fontSize: "50px" }}> New Locker:</p>
        <Grid
          item
          container
          xs={6}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <TextField
            id="inputLocker"
            label="Locker Name:"
            value={lockerName}
            onChange={(e) => setLockerName(e.target.value)}
          />
          <br />
          <TextField
            id="inputLocker"
            label="Serial"
            value={lockerSerial}
            onChange={(e) => setLockerSerial(e.target.value)}
          />
          <br />
          <br />
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              addNewLocker();
            }}
          >
            Submit
          </Button>
        </Grid>
        <br />
        <br />
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            history.push("/");
            console.log(lockerList);
          }}
        >
          Log Out
        </Button>
      </Grid>

      <Grid
        item
        container
        xs={6}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {lockerList.map((item) => (
          <Grid item xs={3}>
            <CardMedia className={classes.media} image={Sharat}>
              <br />
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <br />
              <IconButton
                id={item.name}
                color="primary"
                onClick={() => history.push(`/DataLockerPage/:${item}`)}
              >
                <EnterIcon fontSize="large"></EnterIcon>
              </IconButton>
            </CardMedia>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LockersPage);
