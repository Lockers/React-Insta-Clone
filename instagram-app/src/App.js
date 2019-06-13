import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import { Login } from '../src/components/Login/Login';
import { PostContainer } from './components/PostContainer/PostContainer';
import withAuthenticate from './Authentication/withAuthenticate';
import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  margin: auto 0;
  max-width: 800px;
`


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
    <Div>

      {
        this.props.isAuthed === false &&
        <Login login={this.props.login} />
      }
      {
          this.props.isAuthed === true &&
        <PostContainer dummyData={this.state.dummyData} logout={this.props.logout} />
      }
    </Div>
    );
  
  }
}

export default withAuthenticate(App);
