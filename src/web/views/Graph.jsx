import React, {PureComponent} from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w9fyL4uh/';

  data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  render() {
    return (
      <div>
        <div className="topbarmenu">
          <img src="/static/menuBar.png" className="background" alt="logo" />
          <div className="home1">
            Analytics
            <img src="/static/triangle.png" className="left" alt="logo" />
          </div>
        </div>

        <div className="user">Hi, Jorge Abdo</div>
        <div className="charts">
          <img src="/static/menuBar.png" className="background43" alt="logo" />
          <AreaChart
            width={2700}
            height={500}
            data={this.data}
            margin={{
              top: 10,
              right: 1000,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#096dd9"
            />
          </AreaChart>
        </div>
      </div>
    );
  }
}
