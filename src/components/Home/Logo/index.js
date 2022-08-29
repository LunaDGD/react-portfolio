import './index.scss'
// import LogoD from '../../../assets/images/coder.webp'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import Loader from 'react-loaders'

function Logo() {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 10,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 1,
      }
    )
  }, [])
  return (
    <>
      {/* <div className="logo-container" ref={bgRef}>
        <img
          className="solid-logo"
          ref={solidLogoRef}
          src={LogoD}
          alt="Developer"
        />

        <svg
          width="559pt"
          height="897pt"
          version="1.0"
          viewBox="0 0 559 897"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div> */}
      <Loader type="square-spin" />
    </>
  )
}

export default Logo
