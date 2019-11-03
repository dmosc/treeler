import React, {Profiler} from 'react';
import {Button, Icon, Avatar, Card, Radio} from 'antd';

const {Meta} = Card;

const card = ({post: {nombre}}) => {
  return (
    <div className="card transaction">
      <div className="transaction__column">
        <img
          src="http://picsum.com/100"
          alt=""
          className="transaction_profileImage"
        />
      </div>
      <div className="transaction__column">
        <div className="transaction__title">title</div>
        <div className="transaction__date">fecha</div>
        <div className="transaction__comments">comments</div>
      </div>
    </div>
  );
};

export default card;
