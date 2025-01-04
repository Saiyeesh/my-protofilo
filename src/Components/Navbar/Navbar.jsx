import "./Navbar.css"

import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <>
       <div className='main'>
          <div className='firstNav'>
            <h2>Portfilo</h2>
          </div>
          <ul className='ulsNav'>
            <Link to="/" className='linkLine'><li>About</li></Link>
            <Link to="/skills" className='linkLine'><li>Skills</li></Link>
            <Link to="/experience" className='linkLine'><li>Experience</li></Link>
            <Link to="/projects" className='linkLine'><li>Projects</li></Link>
            <Link to="/education" className='linkLine'><li>Education</li></Link>
            <Link to="/contact" className='linkLine'><li>Contact</li></Link>
          </ul>
          <div className='btn'>
            <a href='https://github.com/Saiyeesh' target='_blank'><button>Git Hub</button></a>
          </div>
       </div>
     </>
  )
}

export default Navbar