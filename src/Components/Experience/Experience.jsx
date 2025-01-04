import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import xml from "..//../assets/xml.png";
import full from "..//../assets/full.png";

import "./Experience.css";

function Experience() {
    return (
        <>
            <Navbar></Navbar>
            <div className='experBack'>
                <h1>Experience</h1>
                <p>My work experience as a XML Developer and Working on different projects of JSON&E-Publications.</p>
                <div className='exp-box'>
                    <div className='ExperBox'>
                        <div className='Exper'>
                            <div className='imgExp'>
                                <img src={xml} alt='xml' className='xml' />
                            </div>
                            <div className='TxtExp'>
                                <h3>XML Developer</h3>
                                <p>Teuly IT Solutions PVT LTD</p>
                            </div>
                        </div>
                        <p>Working on Files of JSON and E-Publications to Create and maintain XSLT stylesheets for transforming XML data into other formats (HTML, JSON, etc.).</p>
                    </div>
                    <div className='ExperBox'>
                        <div className='Exper'>
                            <div className='imgExp'>
                                <img src={full} alt='xml' className='xml' />
                            </div>
                            <div className='TxtExp'>
                                <h3>Full Stack Web Developer</h3>
                                <p>Trained in CCBP 4.0</p>
                            </div>
                        </div>
                        <p>Working on some projects with Frontend React.js and BackEnd Node.js with Express.js(FrameWork).</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Experience