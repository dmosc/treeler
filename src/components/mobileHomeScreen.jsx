import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Sidebar from "react-sidebar";
import './mobile.css';
import IMG from "../img/daniel.jpg"
import Popup from "reactjs-popup";
import MAP from "../img/map.jpg"
import HomeScreen from './web';
import GoogleMapReact from 'google-map-react';
import { Button, Input, Upload, Icon, DatePicker } from 'antd';
import logo from '../img/2.png';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(date, dateString) {
    console.log(date, dateString);
}

class MobileHomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
            place: '',
            type: '',
            date: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div>
                <Popup trigger={<Button type="primary">Register tree</Button>} modal>
                    {close => (
                        <div className="modal">
                            <div className="actividadespublicadascopy78">
                                <form style={{ padding: '40px' }}>
                                    <div >
                                        Register Tree
                                    </div>
                                    <Upload>
                                        <Button style={{ margin: '20px 20px 20px 0' }}>
                                            <Icon type="upload" /> Click to Upload
                                        </Button>
                                    </Upload>
                                    <Input
                                        style={{ marginBottom: '20px' }}
                                        placeholder="Place" />
                                    <Input
                                        style={{ marginBottom: '20px' }}
                                        placeholder="Type" />

                                    <DatePicker
                                        onChange={onChange} />

                                    <Button style={{ margin: '20px 20px 20px 0' }}>
                                        <Icon type="check" /> Done
                                        </Button>

                                </form>
                                <div className="mRectangle20">
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
                <div className='map'>
                    <GoogleMapReact defaultCenter={{ lat: 0, lng: 0 }} defaultZoom={11}>
                    </GoogleMapReact>
                </div>
                <div className="rectangle2">
                </div>
                <div className='welcomeBack'>
                    Welcome Back Jorge Abdo!
                    </div>
                <div className='treelers'>
                    Treelers
                        </div>
                <div className='treelersNum'>
                    290
                        </div>
            </div>
        )
    }
}

export default MobileHomeScreen
