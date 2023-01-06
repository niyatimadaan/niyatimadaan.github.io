import './index.scss'
import LogoS from '../../../assets/images/logo-n.png'
import { useRef } from 'react'


const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="s" />
    </div>
  )
}

export default Logo
