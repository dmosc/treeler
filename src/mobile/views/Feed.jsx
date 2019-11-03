import React, {Component} from 'react';
import Card from '../../components/card';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class NewsFeed extends Component {
  render() {
    let data = [
      {
        nombre: 'Jorge',
        id: '34567890'
      },
      {
        nombre: 'JorgeAA',
        id: '34567890'
      },
      {
        nombre: 'JorgeAAA',
        id: '3dddddddd'
      },
      {
        nombre: 'JorgeA322',
        id: '3dddeef'
      }
    ];
    return (
      <div>
        <div className="feedTitle">
          <h2>Feed</h2>
        </div>
        <div className="pprruueebbaa">
          <ul className="ulllll">
            {data &&
              data.map(post => {
                {
                  return (
                    <Link to={'/post/' + post.id}>
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

export default NewsFeed;
