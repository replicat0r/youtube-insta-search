'use strict'
import React, {Component} from 'react'
// same as React.Component
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_detail'
const API_KEY = 'AIzaSyA48pouanEQKg2U9kJ6u139URgazMrmnio'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos: []}


    YTSearch({key:API_KEY,term: "surf"}, (videos)=> {
      this.setState({videos})
      //same as below
      //this.setState({videos:videos})
    })
  }
   render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video = {this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  };
}


ReactDOM.render(<App/>, document.querySelector('.container'))
