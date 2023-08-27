import React from 'react';
import mylogo from '../../assets/Boladale Busari.png'
import './index.scss'


const Development = () => {
  return (
    <div className="development">

      <div className='logo'>
        <img src={mylogo} alt='logo' />
      </div>

      <div>
        <h2>👋 Hey, I'm BoladaleB</h2>
        <p>
          Hi there! I'm actively working on this website to bring you something amazing.
          If you have any questions, suggestions, or just want to say hello, feel free to get in touch.
        </p>
        <p>
          I'm excited to share more with you as this website develops. Stay tuned for updates on new features and content.
        </p>
      </div>

      
      <div className="social-links">
        <p>Connect with me:</p>
        <ul>
          <li>
            <a href="mailto:boladalebusari@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/boladaleb/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://instagram.com/bbusari01?igshid=MmIzYWVlNDQ5Yg==" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/bbusari01" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Development;


