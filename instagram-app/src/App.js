import React, { Component } from 'react';
import dummyData from './components/dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import moment from 'moment'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyData: [],
      commentName: ''
    }
  }
    
  componentDidMount() {
  this.setState({dummyData})
  }
  changeHandler = (event) => {
    console.log(event.target.value)
    console.log(this.state.dummyData[0].comments)
  }
  
  addComment = (event) => {
    event.preventDefault()
    console.log('Add comment firing?')
    const newComment = {
      text: this.state.commentName, 
      username: 'boris'
    }
    console.log(this.state.dummyData.username[0].comments)
    this.setState({dummyData: [...this.state.dummyData[0].comments, newComment]})
  }
  addLikes = (event) => {
   console.log('Add Likes Firing')
 }
  render() { 
    return (
      <div className="AppContainer">
        <SearchBar />
        {
            this.state.dummyData.map((data, index) => {
              return <PostContainer
                postData={data}
                key={index}
                addComment={this.addComment}
                changeHandler={this.changeHandler}
                addLikes={this.addLikes}
              />
            })
        }
        
    </div>
    );
  }
}

export default App;
