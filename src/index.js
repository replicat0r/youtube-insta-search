'use strict'
import React, {Component} from 'react'
// same as React.Component
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_detail'
import _ from 'lodash'
const API_KEY = 'AIzaSyA48pouanEQKg2U9kJ6u139URgazMrmnio'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('dota 2')
  }
  videoSearch(term){

        YTSearch({key:API_KEY,term: term}, (videos)=> {
          this.setState({
            videos:videos,
            selectedVideo:videos[0]
          })
      })
  }
   render() {
     const videoSearch = _.debounce((term) => {this.videoSearch(term)},200)
    return (
      <div>
        <SearchBar onSearchTermChange= {videoSearch} />
        <VideoDetails video = {this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
        onVideoSelect={(selectedVideo) => this.setState({selectedVideo:selectedVideo})}/>
      </div>
    );
  };
}


ReactDOM.render(<App/>, document.querySelector('.container'))
