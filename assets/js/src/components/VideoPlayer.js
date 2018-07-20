import React from 'react'

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div></div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&amp;showinfo=0`

  return (
    <div className="center-container">
      <div className="video-detail col-md-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="details">
          <h3>{video.snippet.title}</h3>
          <h4 style={{ color: 'red' }}>{video.snippet.channelTitle}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
