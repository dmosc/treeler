/* global google */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "react-sidebar";
import "./mobile.css";
import IMG from "../img/daniel.jpg";
import Popup from "reactjs-popup";
import GoogleMapReact from "google-map-react";
import { Button, Input, Upload, Icon, DatePicker } from "antd";
import logo from "../img/2.png";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}

const Marker = ({ text }) => <div>{text}</div>;

const mql = window.matchMedia(`(min-width: 800px)`);

const routes = [
  /*
    {
        path: '/mobile/home',
        exact: true,
        main: MobileHomeScreen,
    },
    
    {
        path: '/mobile/registerTrees',
        exact: true,
        main: HomeScreen,
    },
    {
        path: '/mobile/myTrees',
        exact: true,
        main: HomeScreen,
    },
    {
        path: '/mobile/newsFeed',
        exact: true,
        main: HomeScreen,
    },
    {
        path: '/mobile/events',
        exact: true,
        main: HomeScreen,
    },
    {
        path: '/mobile/profile',
        exact: true,
        main: HomeScreen,
    },
*/
];

class MobileHomeScreen extends Component {
  static defaultProps = {
    center: {
      lat: 30.26,
      lng: -97.77
    },
    zoom: 11
  };
  constructor() {
    super();
    this.state = {
      sidebarOpen: false,
      map: null,
      heatmapVisible: true,
      sidebarDocked: mql.matches,
      img: "",
      place: "",
      type: "",
      date: "",
      heatmapVisible: true,
      heatmapPoints: [
        { lat: 30.16, lng: -97.71 },
        { lat: 30.26, lng: -97.79 },
        { lat: 30.36, lng: -97.7 },
        { lat: 30.46, lng: -97.79 },
        { lat: 30.56, lng: -97.7 },
        { lat: 30.266, lng: -97.79 },
        { lat: 30.276, lng: -97.7 },
        { lat: 30.29, lng: -97.79 },
        { lat: 30.76, lng: -97.7 },
        { lat: 30.46, lng: -97.79 }
      ]
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.handleMapReady = this.handleMapReady.bind(this);
  }
  onMapClick({ x, y, lat, lng, event }) {
    if (!this.state.heatmapVisible) {
      return;
    }

    this.setState({
      heatmapPoints: [...this.state.heatmapPoints, { lat, lng }]
    });
    if (this._googleMap !== undefined) {
      const point = new google.maps.LatLng(lat, lng);
      this._googleMap.heatmap.data.push(point);
    }
  }
  toggleHeatMap() {
    this.setState(
      {
        heatmapVisible: !this.state.heatmapVisible
      },
      () => {
        if (this._googleMap !== undefined) {
          this._googleMap.heatmap.setMap(
            this.state.heatmapVisible ? this._googleMap.map_ : null
          );
        }
      }
    );
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
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const apiKey = { key: "AIzaSyDwPTu_XBkCoq7x_tip5nRTCPZSlGh8HsM" };
    const heatMapData = {
      positions: this.state.heatmapPoints,
      options: {
        radius: 20,
        opacity: 0.7
      }
    };
    return (
      <div>
        <div className="map">
          <GoogleMapReact
            ref={el => (this._googleMap = el)}
            bootstrapURLKeys={apiKey}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            heatmapLibrary={true}
            heatmap={heatMapData}
            onClick={this.onMapClick.bind(this)}
          ></GoogleMapReact>
        </div>

        <Router>
          <Sidebar
            sidebar={
              <div>
                <img src={IMG} className="profileIMGSideBar" alt="logo" />
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
              </div>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{
              sidebar: {
                background: "#0277BD",
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
            onClick={() => this.onSetSidebarOpen(true)}
            src={IMG}
            className="profileImg"
            alt="logo"
          />

          <Redirect from="/" exact to="/mobile/home" />
          <Popup
            trigger={
              <div className="registerTreeButton">
                <Button type="primary">Register tree</Button>
              </div>
            }
            modal
          >
            {close => (
              <div className="modal">
                <div className="actividadespublicadascopy78">
                  <form style={{ padding: "40px" }}>
                    <div>Register Tree</div>
                    <Upload>
                      <Button style={{ margin: "20px 20px 20px 0" }}>
                        <Icon type="upload" /> Click to Upload
                      </Button>
                    </Upload>
                    <Input
                      style={{ marginBottom: "20px" }}
                      placeholder="Place"
                    />
                    <Input
                      style={{ marginBottom: "20px" }}
                      placeholder="Type"
                    />

                    <DatePicker onChange={onChange} />

                    <Button style={{ margin: "20px 20px 20px 0" }}>
                      <Icon type="check" /> Done
                    </Button>
                  </form>
                  <div className="mRectangle20"></div>
                </div>
              </div>
            )}
          </Popup>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Router>

        <div className="rectangle2"></div>
        <div className="welcomeBack">Welcome Back Jorge Abdo!</div>
        <div className="treelers">Treelers</div>
        <div className="treelersNum">290</div>
      </div>
    );
  }
}

export default MobileHomeScreen;
