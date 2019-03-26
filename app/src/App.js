import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './components/dummy-data';

 class App extends Component {
  constructor(){
    super();
    this.state= {
      data: dummyData,
    }
  }

   render() {
    return (
      <div className="App">
      <SearchBar/>
      <PostContainer posts = {this.state.data}/>
      </div>
    );
  }
}

 export default App;