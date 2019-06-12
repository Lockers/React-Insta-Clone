import React, { Component } from 'react';
import dummyData from './components/dummy-data'
import { PostContainer } from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyData: []
    }
  }
    
  componentDidMount() {
    this.setState({ dummyData })
  }
  
render() { 
    
    return (
      <div className="AppContainer">
        {
          this.state.dummyData.map((data, index) => {
            return <PostContainer data={data} key={index} likes={data} />
          })
        }
      </div>
    );
  }
}


export default App;
