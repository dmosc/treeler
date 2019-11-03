import React, {Profiler} from 'react';
import {Button, Icon, Avatar, Card, Radio} from 'antd';
import '../index.css';

const {Meta} = Card;

const card = ({post: {nombre}}) => {
  return (
    <Card
      style={{margin: '40px'}}
      hoverable
      style={{width: '50%', left: '-8%'}}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          height="200"
        />
      }
    >
      <Meta title={`Planted by: ${nombre}`} />
      <Meta title="Date: " />
      <Meta title="Place: " />
      <Meta title="Treelers: " />
      <br></br>

      <Button
        style={{right: '-90%'}}
        type="primary"
        shape="circle"
        icon="like"
        size="large"
      />
    </Card>
  );
};

export default card;
