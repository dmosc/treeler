import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Sidebar from "react-sidebar";
import IMG from "../img/img.jpg"

class NewsFeed extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log(state)
    return {
        //event:
        //user:
    };

}

export default connect(mapStateToProps)(NewsFeed)