import React from 'react';
import {isMobile} from 'react-device-detect';
import Mobile from './mobile/index';
import Web from './web/index';
import 'antd/dist/antd.css';
import {withApollo} from 'react-apollo';

function App(props) {
  const {client} = props;
  console.log(client);
  if (isMobile) {
    return <Mobile />;
  } else {
    return <Web />;
  }
}

export default withApollo(App);
