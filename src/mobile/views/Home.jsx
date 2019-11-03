/* global google */
import React, { Component } from "react";
import Popup from "reactjs-popup";
import GoogleMapReact from "google-map-react";
import { Button, Input, Upload, Icon, DatePicker, Typography } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}

const Marker = ({ text }) => <div>{text}</div>;

class Home extends Component {
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
      map: null,
      heatmapVisible: true,
      img: "",
      place: "",
      type: "",
      date: "",
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
                  <div className="registerTree">Register Tree</div>
                  <div className="rectangle89" />
                  <Upload>
                    <Button style={{ margin: "20px 20px 20px 0" }}>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>
                  <Input style={{ marginBottom: "20px" }} placeholder="Place" />
                  <Input style={{ marginBottom: "20px" }} placeholder="Type" />

                  <DatePicker onChange={onChange} />

                  <Button style={{ margin: "20px 20px 20px 0" }}>
                    <Icon type="check" /> Done
                  </Button>

                  <Input style={{ marginBottom: "20px" }} placeholder="Place" />
                  <Input style={{ marginBottom: "20px" }} placeholder="Type" />

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
        <div className="rectangle2"></div>
        <div className="welcomeBack">
          <h1>Welcome Back Jorge Abdo!</h1>
        </div>
        <div className="treelers">
          <p>Treelers</p>
        </div>
        <div className="treelersNum">290</div>
      </div>
    );
  }
}

export default Home;
