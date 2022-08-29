import { Link } from 'react-router-dom'
import './index.scss'
import sr from '../../../src/assets/images/sr.mp4'
import Loader from 'react-loaders'

function Home() {
  return (
    <div className="container home-page">
      <div className="overlay"></div>
      <video src={sr} autoPlay loop muted />
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I'm Diego Software Engineer
        </h1>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <Loader className="loader-active loader" type="square-spin" />
      </div>
    </div>
  )
}

export default Home
