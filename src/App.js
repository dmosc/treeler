import React from "react";
import { isMobile } from "react-device-detect";
import Mobile from "./mobile/index";
import Web from "./web/index";
import "antd/dist/antd.css";

function App() {
  if (isMobile) {
    return <Mobile />;
  } else {
    return <Web />;
  }
}

export default App;
