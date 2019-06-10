import React, { Component } from 'react';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { dummyData }
}

  render() {
    console.log(dummyData)
    return (
      <div className="AppContainer">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
    </div>
    );
  }
}

export default App;
