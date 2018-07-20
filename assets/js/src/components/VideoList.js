import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  if (!videos) {
    return <div>Loading...</div>
  }

  const sortedVideos = videos.sort((a, b) => {
    (Date.now() - Date(a.snippet.publishedAt)) - (Date.now() - Date(b.snippet.publishedAt))
  })

  const videoItems = sortedVideos.reverse().map(((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  }))

  return (
    <div className="center-container">
      <div className="col-md-12">
        <ul className="list-group">
          {videoItems}
        </ul>
      </div>
    </div>
  )
}

export default VideoList
