import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default class StockGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let dataValues = this.props.stockData;
    let parseData = [];
    // turn the giant array of values into parsable data for charting
    // this done on the front end to show animation of moving graph line on first load
    for (let i = dataValues.length-1; i >= 0 ; i--) {
      parseData.push({
        'price': parseFloat(dataValues[i][1]),
        'date': dataValues[i][0],
      })
    }
    return (
      <LineChart
        width={600}
        height={300}
        data={parseData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
      >
        <XAxis dataKey="date" />
        <YAxis dataKey="price" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#82ca9d" dot={false} />
      </LineChart>
    );
  }
}
