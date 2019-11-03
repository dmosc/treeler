import React, { Component } from "react";
import Card from "../../components/card";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class MyTrees extends Component {
  render() {
    let data = [
      {
        nombre: "Jorge",
        id: "34567890"
      },
      {
        nombre: "JorgeAA",
        id: "34567890"
      },
      {
        nombre: "JorgeAAA",
        id: "3dddddddd"
      }
    ];
    console.log(data);
    return (
      <div>
        <div className="feedTitle">
          <h2>My Trees</h2>
        </div>
        <div className="pprruueebbaa">
          <ul className="ulllll">
            {data &&
              data.map(post => {
                {
                  return (
                    <Link to={"/post/" + post.id}>
                      <Card post={post} key={data.id} />
                    </Link>
                  );
                }
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyTrees;
