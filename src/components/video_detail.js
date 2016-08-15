'use strict'
import React from 'react';
const VideoDetails = (props) => {

  var video = props.video
  if (!video){
    return <div> Loading... </div>
  }
  var videoId = video.id.videoId
  var url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item">

        </iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetails
