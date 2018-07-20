import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  _inputChange(query) {
    this.setState({ query: query })
    this.props.onChange(query)
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="search-bar">
          <input
            placeholder="Search Video"
            className="form-control"
            value={this.state.query}
            onChange={(e) => this._inputChange(e.target.value)}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar
