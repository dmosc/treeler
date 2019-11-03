import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Home } from "./views/index";
import "antd/dist/antd.css";
import "./index.css";
import Sidebar from "react-sidebar";
import Web from "../web";
import NewsFeed from "./views/Feed";

const mql = window.matchMedia(`(min-width: 800px)`);

class Mobile extends Component {
  constructor() {
    super();
    this.state = {};
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.handleMapReady = this.handleMapReady.bind(this);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  handleMapReady(mapProps, map) {
    this.setState({ map: map });
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  render() {
    return (
      <div>
        <Router>
          <Sidebar
            sidebar={
              <div>
                <div className="sideBarName">Jorge Abdo</div>
                <div className="sideBarTreeles">290 treelers</div>
                <div className="rectangle10"></div>

                <NavLink
                  to="/mobile/registerTree"
                  className="sideBarRegisterTree"
                >
                  <div>Register Tree</div>
                </NavLink>
                <NavLink to="/mobile/myTrees" className="sideBarMyTrees">
                  <div>My Trees</div>
                </NavLink>
                <NavLink to="/mobile/newsFeed" className="sideBarNewsFeed">
                  <div>News Feed</div>
                </NavLink>
                <NavLink to="/mobile/events" className="sideBarEvents">
                  <div>Events</div>
                </NavLink>
                <NavLink to="/mobile/profile" className="sideBarProfile">
                  <div>Profile</div>
                </NavLink>
                <NavLink to="/">
                  <div>Home</div>
                </NavLink>
              </div>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{
              sidebar: {
                background: "#096dd9",
                width: 300
              },
              root: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden"
              }
            }}
          ></Sidebar>
          <img
            src="/static/daniel.jpg"
            onClick={() => this.onSetSidebarOpen(true)}
            className="profileImg"
            alt="logo"
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/mobile/newsFeed" component={NewsFeed} />
          <Route exact path="/events" component={Home} />
          <Route exact path="/trees" component={Home} />
          <Route exact path="/profile" component={Home} />
          <Route exact path="/papa" component={Web} />
        </Router>
      </div>
    );
  }
}

export default Mobile;
