import React from 'react'
import moment from 'moment'

const VideoItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.medium.url
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list">
        <div className="video-left">
          <img className="video-img" src={imgUrl} />
        </div>
        <div className="video-body">
          <div className="video-heading">
            <h4>{video.snippet.title}</h4>
            <h5 style={{ color: '#ff0000' }}>{video.snippet.channelTitle}</h5>
            <h6>{moment(video.snippet.publishedAt).fromNow()}</h6>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoItem
