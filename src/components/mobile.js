import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "react-sidebar";
import "./mobile.css";
import IMG from "../img/daniel.jpg";
import MAP from "../img/map.jpg";
import HomeScreen from "./web";
import GoogleMapReact from "google-map-react";
import MobileHomeScreen from "./mobileHomeScreen";
import "antd/dist/antd.css";

const routes = [
  {
    path: "/mobile/home",
    exact: true,
    main: MobileHomeScreen
  }
];
class Mobile extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Redirect from="/" exact to="/mobile/home" />
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Router>
      </div>
    );
  }
}

export default Mobile;
