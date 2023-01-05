import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-n.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className="logo" src={LogoS} alt="logo" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank"
            rel="noreferrer"
            href='http://www.linkedin.com/in/niyati-madaan-6b3319200'
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
            rel="noreferrer"
            href='https://github.com/niyatimadaan'
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
    </ul>
  </div>
)

export default Sidebar
