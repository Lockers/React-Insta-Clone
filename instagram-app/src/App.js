import React, { Component } from 'react';
import dummyData from './dummy-data'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { dummyData }
}

  render() {
    console.log(dummyData)
    return (
      <div className="App">
        Hello World
    </div>
    );
  }
}

export default App;
