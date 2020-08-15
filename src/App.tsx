import React, { FC } from "react";
import "./App.css";
import {Router, Switch, Route, Link } from "react-router-dom";//BrowserRouter as
import HomePage from "./pages/HomePage";
import LockersPage from "./pages/LockersPage";
import DataLockerPage from "./pages/DataLockerPage"
import history from "./history";
import { Locker } from "./Entities/Locker";

interface MyProps {}

const App: FC<MyProps> = ({}) => {
  return (
    <>
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/LockersPage" component={LockersPage} />
          <Route path="/DataLockerPage" component={DataLockerPage} /*render={(item) => <DataLockerPage locker={item} />}*//>
        </Switch>
      </div>
    </Router>
    </>
  );
};

export default App;
