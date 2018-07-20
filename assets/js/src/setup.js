import React, { Component } from 'react'
import YTSearch from 'youtube-api-v3-search'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'
import Footer from './components/Footer'

const YOUTUBE_API = 'YOUTUBE_API'

class Setup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this._searchVideo = this._searchVideo.bind(this)
  }

  componentDidMount() {
    this._searchVideo('hello kitty')
  }

  _searchVideo(query) {
    const options = {
      q: query == '' ? 'hello kitty' : query,
      part: 'snippet',
      type: 'video'
    }

    YTSearch(YOUTUBE_API, options, (err, videos) => {
      if (err) {
        throw err
      }

      this.setState({
        videos: videos.items,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="bg">
          <NavBar siteTitle='UTube App' />
          <SearchBar
            onChange={(searchQuery) => { this._searchVideo(searchQuery) }} />
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }) }}
            videos={this.state.videos}
          />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Setup
