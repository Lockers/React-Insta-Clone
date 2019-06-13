import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import { Login } from '../src/components/Login/Login';
import { PostContainer } from './components/PostContainer/PostContainer';
import withAuthenticate from './Authentication/withAuthenticate';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyData: [],
    }

  }
    componentDidMount() {
    this.setState({ dummyData })
  }
  
render() { 
    
  return (
    <div>

      {
        this.props.isAuthed === false &&
        <Login login={this.props.login} />
      }
      {
          this.props.isAuthed === true &&
        <PostContainer dummyData={this.state.dummyData} logout={this.props.logout} />
      }
    </div >
    );
  
  }
}

export default withAuthenticate(App);
