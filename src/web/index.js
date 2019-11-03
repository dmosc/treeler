import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RealTimeChart from "./views/Graph";
//import siglium from "./img/sigliumDefault.png";
//import logoNombre from "./img/logoNombre.png";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="mainScreen">
        <Router>
          <Redirect from="/" exact to="/home" />

          <div style={{ display: "flex" }}>
            <div
              style={{
                padding: "0%",
                height: "100%",
                width: "17%"
              }}
            >
              <div className="sideBar">
                <ul>
                  <div>
                    <img
                      src="/static/topHeader.png"
                      className="topHeader"
                      alt="logo"
                    />
                    <img
                      src="/static/3.png"
                      className="logoNombre"
                      alt="logo"
                    />
                    {/* <img src={logoNombre} className="logoNombre" alt="logo" /> */}
                    {/* <img src={siglium} className="siglium" alt="logo" />{" "} */}
                    <div className="schoolName">Treeler</div>{" "}
                  </div>
                  <NavLink
                    to="/trees"
                    activeClassName="sideBarImageActive"
                    className="sideBarImage"
                  >
                    <div className="menu">
                      <div class="activemenuitem">
                        <div class="rectangle"></div>

                        <div className="menuitem1">
                          <div class="home2">Trees</div>
                        </div>
                        <div class="home1">
                          <img
                            src="/static/sprout.png"
                            className="shape"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                  <p></p>
                  <NavLink
                    to="/graph"
                    activeClassName="sideBarImage2Active"
                    className="sideBarImage2"
                    onClick={this.toggleIcon}
                  >
                    <div className="menu">
                      <div>
                        <div></div>

                        <div className="menuitem1">
                          <div class="home2">Graph</div>
                        </div>
                        <div class="home1">
                          <img
                            src="/static/graph.png"
                            className="shape"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                  <p></p>
                  <NavLink
                    to="/settings"
                    activeClassName="sideBarImage3Active"
                    className="sideBarImage3"
                    onClick={this.toggleIconSettings}
                  >
                    <div className="menu">
                      <div>
                        <div></div>

                        <div className="menuitem1">
                          <div class="home2">Settings</div>
                        </div>
                        <div class="home1">
                          <img
                            src="/static/settings.png"
                            className="shape"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                  <p></p>
                </ul>
              </div>
            </div>
          </div>
          <Route exact path="/" />
          <Route exact path="/graph" component={RealTimeChart} />
          <Route exact path="/mobile/events" component={RealTimeChart} />
        </Router>
      </div>
    );
  }
}

export default SideBar;
