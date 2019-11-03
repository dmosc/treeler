import React, { Profiler } from "react";
import { Button, Icon, Avatar, Card } from "antd";
import "../index.css";

const { Meta } = Card;

const card = ({ post }) => {
  console.log({ post });
  return (
    <li className="listaActividades">
      <Card style={{ width: 200, marginTop: 16 }}>
        <Meta avatar={<Avatar src="/static/daniel.jpg" />} title={post.nombre}>
          Planted By:{post.name}
        </Meta>
        <Button type="primary" shape="circle">
          {" "}
          <Icon type="like" theme="twoTone" />
        </Button>
      </Card>
    </li>
  );
};

export default card;
