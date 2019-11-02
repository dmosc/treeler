import React from 'react';
import { isMobile } from 'react-device-detect';
import Mobile from './components/mobile'
import Web from './components/web'
import 'antd/dist/antd.css';
import './App.css';

function App() {
  if (isMobile) {
    return (
      <Mobile />
    );
  } else {
    return (
      <Web />
    )
  }
}

export default App;
