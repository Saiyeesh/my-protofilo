import "./Projects.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import prosheet from "..//../assets/prosheet.jpeg";

function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <div className="projectsBack">
        <h3>Projects</h3>
        <p>I have worked on a wide range of projects. Here are some of my projects</p>
        <div className="card1">
          <img alt="Card image cap" src={prosheet} className="imgsheet"/>
          <div className="cardDetails">
            <h5 >Non-Woven Bag Website</h5>
            <p>
            Developed a user-friendly Non-Woven Bag Website for customizing and ordering eco-friendly bags, leveraging [technologies used] to promote sustainability.
            </p>
            <div className="btn-part">
              <a href="https://sv-enter-prise-site.vercel.app"  target="_blank"><button>View Live</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Projects;