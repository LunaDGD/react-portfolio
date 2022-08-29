import './index.scss'

import React from 'react'
import Loader from 'react-loaders'

function Projects() {
  return (
    <>
      <div className="container project-page">
        <div className="parent">
          <div className="cards"></div>
          <div className="cards"></div>
          <div className="cards"></div>
          <div className="cards"></div>
          <div className="cards"></div>
          <div className="cards"></div>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default Projects
