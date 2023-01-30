import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home/Home";
import React, {Fragment} from "react";
import {Nav} from "react-bootstrap";
import Navs from "./Component/Nav/Nav";

function App() {
  return (
      <Fragment>
        <Navs/>
        <Home/>
      </Fragment>
  );
}

export default App;
