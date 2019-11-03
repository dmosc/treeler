import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Sidebar from "react-sidebar";
import './mobile.css';
import IMG from "../img/daniel.jpg"
import MAP from "../img/map.jpg"
import HomeScreen from './web'
import GoogleMapReact from 'google-map-react'
import logo from '../img/2.png'
import MobileHomeScreen from './mobileHomeScreen'
import 'antd/dist/antd.css';

const mql = window.matchMedia(`(min-width: 800px)`);

const routes = [
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

]

class Mobile extends Component {
    constructor() {
        super();
        this.state = {
            sidebarOpen: false,
            sidebarDocked: mql.matches,
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
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
                        sidebar={<div>
                            <img src={IMG} className='profileIMGSideBar' alt="logo" />
                            <div className='sideBarName'>
                                Jorge Abdo
                                </div>
                            <div className='sideBarTreeles'>
                                290 treelers
                                </div>
                            <div className="rectangle10">
                            </div>

                            <NavLink to='/mobile/registerTree' className='sideBarRegisterTree'>
                                <div>
                                    Register Tree
                                    </div>
                            </NavLink>
                            <NavLink to='/mobile/myTrees' className='sideBarMyTrees'>
                                <div>
                                    My Trees
                                    </div>
                            </NavLink>
                            <NavLink to='/mobile/newsFeed' className='sideBarNewsFeed'>
                                <div>
                                    News Feed
                                    </div>
                            </NavLink>
                            <NavLink to='/mobile/events' className='sideBarEvents'>
                                <div>
                                    Events
                                    </div>
                            </NavLink>
                            <NavLink to='/mobile/profile' className='sideBarProfile'>
                                <div>
                                    Profile
                                    </div>
                            </NavLink>

                        </div>}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={{
                            sidebar: {
                                background: "#0277BD",
                                width: 300,
                            }, root: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                overflow: "hidden"
                            },
                        }}>
                    </Sidebar>
                    <img src={logo} className='logohomeScreen' alt="logo" />
                      <img onClick={() => this.onSetSidebarOpen(true)} src={IMG} className='profileImg' alt="logo" />
                    <div className="rectangle1">
                    </div>
                    <img src={logo} className='logohomeScreen' alt="logo" />
                    <Redirect from="/" exact to="/mobile/home" />
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </Router>

            </div>
        )
    }
}

export default Mobile;
