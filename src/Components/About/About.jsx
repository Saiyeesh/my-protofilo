import "./About.css"
import profile from "..//../assets/pric.jpg"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import resume from "..//..//../public/Resume.pdf" 

function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className='homeBack'>
          <div className='firstPart'>
            <h1>Hi, am </h1>
            <h2>Yellarm Saiyeesh</h2>
            <h5>I am a <span style={{color: 'rgb(133, 76, 230)'}}>Full Stack Developer</span></h5>
            <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivery high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
            <a href={resume} target='_blank'><button>Check Resume</button></a>
          </div>
          <div className='secoundPart'>
            <img src={profile} alt='profile-img' className='profileImg'/>
          </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About