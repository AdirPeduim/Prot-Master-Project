import React, { FC, useState } from "react";
import history from "./../history";
import { Locker } from "../Entities/Locker";
import {
  Button,
  TextField,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Shelf } from "../Entities/Shelf";
import { useParams } from "react-router-dom";

interface MyProps {
  locker: Locker;
}

const DataLockerPage: FC<MyProps> = ({ locker }) => {
  const {item} = useParams();
  const [age, setAge] = useState("");
  const [shelfsArr, setShelfsArr] = useState<Shelf[]>(new Array(44));

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={4}>
          <p style={{ fontSize: "50px" }}>
            DataLockerPage - Locker:{locker.name}
          </p>
        </Grid>
        <Grid
          item
          container
          xs={10}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid
            item
            container
            xs={6}
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <p style={{ fontSize: "50px" }}> New Shelf </p>
            {/*- {locker.name}*/}
            <Grid
              item
              container
              xs={6}
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <FormControl
                style={{ margin: "theme.spacing(1)", minWidth: "180px" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Shelf Number
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  {/* {shelfsfArr.map(item=>{
                 <MenuItem value={item}>{item}</MenuItem>}s
             }) } */}
                </Select>
              </FormControl>
              <FormControl
                style={{ margin: "theme.spacing(1)", minWidth: "180px" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Shelf Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                size="large"
                // onClick={""}
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
                history.push("/LockersPage");
              }}
            >
              Back
            </Button>
          </Grid>

          <Grid
            item
            container
            xs={6}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          ></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DataLockerPage;
