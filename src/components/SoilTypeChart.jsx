import React, {Component} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

class SoilTypeChart extends Component {
  componentDidMount() {
    const {data} = this.props;
    this.setState({data});
  }

  render() {
    const {data} = this.props;
    return (
      <BarChart width={350} height={300} padding={{top: 50}} data={data}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend margin={{top: 30}} />
        <Bar dataKey="probability" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default SoilTypeChart;
