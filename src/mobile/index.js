import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from './views/index';
import 'antd/dist/antd.css';
import './index.css';
import Web from '../web';

class Mobile extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/feed" component={Home} />
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
