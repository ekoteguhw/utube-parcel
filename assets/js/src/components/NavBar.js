import React from 'react'

const Navbar = (props) => {
  return (
    <div className="nav-bar">
      <a href="/" style={{ textDecoration: 'none' }}>
        <h1 id="title" className="text-center">{props.siteTitle}</h1>
      </a>
    </div>
  )
}

export default Navbar
