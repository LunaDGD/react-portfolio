import Loader from 'react-loaders'
import './index.scss'
import sr from '../../../src/assets/images/sr.mp4'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="overlay"></div>
        <video src={sr} autoPlay loop muted />

        <div className="text-zone">
          <h1>Contact Me</h1>
          <h2>lunadgd@protonmail.com</h2>

          <div className="contact-form">
            <form
              rel="noopener noreferrer"
              target="_blank"
              action="https://formsubmit.co/26023bc586dc1987d09be98eeb268bf8"
              method="POST"
            >
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button" value="SEND">
                    Submit
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}

export default Contact
