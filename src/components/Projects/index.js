import './index.scss'
import swiss from '../../assets/images/swiss.png'
import bm from '../../assets/images/bm.jpg'
import pollution from '../../assets/images/pollution.jpg'
import penny from '../../assets/images/penny.png'
import sr from '../../../src/assets/images/sr.mp4'

import React from 'react'
import Loader from 'react-loaders'

function Projects() {
  return (
    <>
      <div className="container project-page">
        <div className="overlay"></div>
        <video src={sr} autoPlay loop muted />
        <div className="parent">
          <div className="cards">
            <a
              href="https://lauterbrunnen-gateway.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={swiss} alt="imageee" />
            </a>
            <a href="https://github.com/LunaDGD/DiegoDuranGatewayRevision">
              <button className="btn">Github</button>
            </a>
          </div>
          <div className="cards">
            <a
              href="https://better-mind.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bm} alt="imageee" />
            </a>

            <a href="https://github.com/LunaDGD/CodeForJusticeG11">
              <button className="btn">Github</button>
            </a>
          </div>
          <div className="cards">
            <a
              href="https://hopehacks-group9.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pollution} alt="imageee" />
            </a>
            <a href="https://github.com/LunaDGD/hopehacks">
              <button className="btn">Github</button>
            </a>
          </div>
          <div className="cards">
            <a
              href="https://cheerful-heliotrope-20c338.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={penny} alt="imageee" />
            </a>
            <a href="https://github.com/Ndroid20/PennyJuiceRD">
              <button className="btn">Github</button>
            </a>
          </div>
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
