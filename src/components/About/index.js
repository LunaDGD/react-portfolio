import './index.scss'
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faNode,
  faAws,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import sr from '../../../src/assets/images/sr.mp4'

function About() {
  return (
    <>
      <div className="container about-page">
        <div className="overlay"></div>
        <video src={sr} autoPlay loop muted />
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            I am an apprentice learning software engineering. I am capable of
            quickly learning the necessary technologies to be able to succeed in
            a career in the tech industry. I am a team leader, able to work well
            with others and able to work independently as well. I am adept at
            designing and building applications with user experience and
            performance in mind.
          </p>
          <p align="LEFT">
            When not working I like to go to the gym as it gives me structure in
            life, gaming, as it's a great way to relieve stress, and finally I
            like to spend time in nature such as going to the park or hiking/
          </p>
          <p>
            If I were to decribe myself in one sentence I would say, I am a
            tech-enthusiast, gamer, and gym rat
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="skills">
            <h1>Skills</h1>
          </div>
          <div className="icons">
            <div className="face">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              <h2>HTML</h2>
            </div>
            <div className="face">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              <h2>CSS</h2>
            </div>
            <div className="face">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              <h2>React</h2>
            </div>
            <div className="face">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              <h2>JavaScript</h2>
            </div>
          </div>
          <div className="icons2">
            <div className="face">
              <FontAwesomeIcon icon={faDatabase} />
              <h2>SQL</h2>
            </div>
            <div className="face">
              <FontAwesomeIcon icon={faNode} />
              <h2>Node</h2>
            </div>
            <div className="face">
              <FontAwesomeIcon icon={faAws} />
              <h2>AWS</h2>
            </div>
            <div className="face">
              <FontAwesomeIcon
                className="git"
                icon={faGithub}
                color="#EC4D28"
              />
              <h2>Git & Github</h2>
            </div>
          </div>
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}

export default About
