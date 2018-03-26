import React from 'react';

import StockGraph from '../components/StockGraph';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stockData: [],
      isLoading: true,
      currentStockName: 'AAPL',
    };

    this.fetchStock = this.fetchStock.bind(this);
  }

  componentDidMount() {
    this.fetchStock('AAPL');
  }

  fetchStock(query) {
    console.log(query);
    fetch('/fetchStock', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((data) => {
        console.log('success fetch: ', data);
        this.setState({
          stockData: data,
          isLoading: false,
          currentStockName: query,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log('current state :', this.state);
    if (this.state.isLoading) {
      return (
        <div>
          Loading Stocks Please Wait...
        </div>
      );
    }
    return (
      <div>
        <NavBar keyword={this.state.currentStockName}/>
        <br/>
        <br/>
        <SearchBar fetchStock={this.fetchStock} />
        <StockGraph stockData={this.state.stockData} />
      </div>
    );
  }
}
