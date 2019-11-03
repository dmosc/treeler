import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Sidebar from "react-sidebar";
import './mobile.css';
import IMG from "../img/daniel.jpg"
import Popup from "reactjs-popup";
import MAP from "../img/map.jpg"
import HomeScreen from './web'
import GoogleMapReact from 'google-map-react'
import { Input } from 'antd';
import logo from '../img/2.png'

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
                <Popup trigger={<button className='notifyButton'>
                    <div className='whiteNotify'>
                        Register Tree
            </div>
                </button>} modal>
                    {close => (
                        <div className="modal">
                            <div className="actividadespublicadascopy78">
                                <div className='registerTreeTitle'>
                                    Register Tree
            </div>
                                <form>
                                    <div>
                                        Image:
                                        </div>
                                    <Input className='formTop' type="file" placeholder="img "
                                        value={this.state.img}
                                        onChange={this.handleChange}
                                        name="img" />
                                    <div>
                                        Place:
                                            </div>
                                    <Input type="text" placeholder="Place "
                                        value={this.state.place}
                                        onChange={this.handleChange}
                                        name="type" />
                                    <div>
                                        Type of Tree
                                            </div>
                                    <Input type="text" placeholder="Type"
                                        value={this.state.type}
                                        onChange={this.handleChange}
                                        name="type" />
                                    <div>
                                        Date
                                            </div>
                                    <Input type="date" placeholder="Date "
                                        value={this.state.date}
                                        onChange={this.handleChange}
                                        name="date" />
                                    <button>
                                        Submit
                                            </button>
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