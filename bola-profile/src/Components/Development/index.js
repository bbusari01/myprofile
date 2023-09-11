import React from 'react';
import mylogo from '../../assets/Boladale Busari.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Development = () => {
  return (
    <div className="development">

      <div className='logo'>
        <img src={mylogo} alt='logo' />
      </div>

      <div className='intro'>
        <h2>👋 Hey, I'm Boladale</h2>
        <p>
          I'm actively working on this website.
          If you have any questions, suggestions, or just want to say hello, feel free to get in touch.
        </p>
      </div>

      
      <div className="social-links">
        <h2>Connect with me...</h2>
        <ul>
          <li>
            <a href="mailto:boladalebusari@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/boladaleb/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/bbusari01" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Development;


