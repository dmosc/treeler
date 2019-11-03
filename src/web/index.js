import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import SoilTypeChart from '../components/SoilTypeChart';
import Graph from './views/Graph';
import {Layout, Menu, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;

const routes = [
  {
    path: '/o2-dashboard',
    exact: true,
    main: Graph
  },
  {
    path: '/profile',
    exact: true,
    main: Graph
  }
];
class SideBar extends Component {
  state = {
    path: ''
  };
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                  <NavLink exact to="/o2-dashboard">
                    <Icon type="user" />
                    <span className="nav-text">O2 Analysis</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/user-activity-dashboard">
                    <Icon type="video-camera" />
                    <span className="nav-text">User Activity</span>
                  </NavLink>
                </Menu.Item>
              </Menu>

              <Route exact path="/o2-dashboard" component={<div>hello</div>} />
            </Sider>
            <Layout>
              <Header style={{background: '#fff', padding: 0}} />
              <Content style={{margin: '24px 16px 0'}}>
                <div
                  style={{padding: 24, background: '#fff', minHeight: 700}}
                ></div>
              </Content>
              <Footer style={{textAlign: 'center'}}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Router>
      </div>
    );
  }
}

export default SideBar;
