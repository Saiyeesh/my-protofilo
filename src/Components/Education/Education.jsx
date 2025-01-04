import "./Education.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import avn from "..//../assets/AVN.jpg";
import trr from "..//../assets/trr.jpg";
import school from "..//../assets/school.jpg";

function Education() {
  return (
     <>
      <Navbar></Navbar>
      <div className='educationBack'>
         <h1>Education</h1>
         <p>My education has been a journey of self-discovery and growth. My education details are has follows:</p>
         <div className='educationBoxes'>
            <div className='edcationBox1'>
                <div className='img-educ'>
                    <img src={avn} alt='avn' className='avn-img'/>
                </div>
                <div className='Txt-educ'>
                    <h4>AVN Institute of Engineering And Technology</h4>
                    <h5>Bachelor of Mechanical Engineering</h5>
                    <h6>I have completed my graduation in 2022</h6>
                </div>
            </div>
            <div>
            <h5 className='grade'>Grade : 60%</h5>
            <p className='I'>I have Completed the Graduation and i have working on Full stack Web development since 1year.</p>
            </div>
         </div>
         <div className='educationBoxes'>
            <div className='edcationBox1'>
                <div className='img-educ'>
                    <img src={trr} alt='avn' className='avn-img'/>
                </div>
                <div className='Txt-educ'>
                    <h4>TRR Institute of Engineering And Technology</h4>
                    <h5>Diploma of Mechanical Engineering</h5>
                    <h6>I have completed my Diploma in 2019</h6>
                </div>
            </div>
            <div>
            <h5 className='grade'>Grade : 65%</h5>
            <p className='I'>I have Completed the Diploma and done some mechanical projects.</p>
            </div>
         </div>
         <div className='educationBoxes'>
            <div className='edcationBox1'>
                <div className='img-educ'>
                    <img src={school} alt='avn' className='avn-img'/>
                </div>
                <div className='Txt-educ'>
                    <h4>Kallam Anji Reddy Vidyalaya High School</h4>
                    <h5>Completed my School SSC</h5>
                    <h6>I have completed my graduation in 2016</h6>
                </div>
            </div>
            <div>
            <h5 className='grade'>Grade : 68%</h5>
            <p className='I'>I have Completed my 10th standard where my new chapter to become Engineer has Triggered.</p>
            </div>
         </div>
      </div>
      <Footer></Footer>
     </>
  )
}

export default Education