import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <form action="" className="tm-contact-form" method="post">
            <div className="form-group mb-4">
              <p></p>
              <h2>Let me hear from you!</h2>
              <p></p>
            </div>
            <div className="form-group mb-0">
              <button type="submit" className="btn tm-send-btn tm-fl-right">
                <a href="mailto:madaanniyati@gmail.com">Contact me</a>
              </button>
            </div>
          </form>
        </div>
        <div className="info-map">
          Niyati Madaan,
          <br />
          New Delhi,
          <br />
          {/* Branka 19, 22000 <br /> */}
          India <br />
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.7041, 77.1025]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.7041, 77.1025]}>
              <Popup>I live here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Contact
