import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {Home, CameraView, NewsFeed} from './views/index';
import Sidebar from 'react-sidebar';
import 'antd/dist/antd.css';
import './index.css';

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
    this.setState({sidebarOpen: open});
  }
  handleMapReady(mapProps, map) {
    this.setState({map: map});
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: mql.matches, sidebarOpen: false});
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
                  onClick={() => this.onSetSidebarOpen(false)}
                  to="/camera"
                  className="sideBarRegisterTree"
                >
                  <div>Plant a tree</div>
                </NavLink>
                <NavLink
                  onClick={() => this.onSetSidebarOpen(false)}
                  to="/myTrees"
                  className="sideBarMyTrees"
                >
                  <div>My trees</div>
                </NavLink>
                <NavLink
                  onClick={() => this.onSetSidebarOpen(false)}
                  to="/newsFeed"
                  className="sideBarNewsFeed"
                >
                  <div>Feed</div>
                </NavLink>
                <NavLink
                  onClick={() => this.onSetSidebarOpen(false)}
                  to="/events"
                  className="sideBarEvents"
                >
                  <div>Events</div>
                </NavLink>
                <NavLink
                  onClick={() => this.onSetSidebarOpen(false)}
                  to="/profile"
                  className="sideBarProfile"
                >
                  <div>Profile</div>
                </NavLink>
                <NavLink onClick={() => this.onSetSidebarOpen(false)} to="/">
                  <div>Home</div>
                </NavLink>
              </div>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{
              sidebar: {
                background: '#096dd9',
                width: 300
              },
              root: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden'
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
          <Route exact path="/newsFeed" component={NewsFeed} />
          <Route exact path="/events" component={Home} />
          <Route exact path="/trees" component={Home} />
          <Route exact path="/camera" component={CameraView} />
          <Route exact path="/profile" component={Home} />
          <Route exact path="/papa" component={Home} />
        </Router>
      </div>
    );
  }
}

export default Mobile;
