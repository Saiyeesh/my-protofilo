import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import react from "..//../assets/react.png";
import redux from "..//../assets/redux.png";
import html from "..//../assets/html.png";
import css from "..//../assets/css.png";
import js from "..//../assets/js.png";
import bootstrap from "..//../assets/bootstrap.jpg";
import node from "..//../assets/node.png";
import express from "..//../assets/express.png";
import mongo from "..//../assets/mongoo.png";
import sql from "..//../assets/sql.jpg";
import git from "..//../assets/git.png";
import post from "..//../assets/post.png";
import vs from "..//../assets/vs.jpg";
import figma from "..//../assets/figma.jpg";
import docker from "..//../assets/docker.jpg";

import "./Skills.css"

function Skills() {
  return (
    <>
       <Navbar></Navbar>
       <div className='skillsBack'>
          <h1>Skills</h1>
          <p>Here are some of my Skills on which I have been working on for the past 2years.</p>
          <div className='skillsBox'>
                <div className='frontEnd'>
                    <h1>FrontEnd</h1>
                    <div className='boxes'>
                        <div className='box-1'>
                            <img src={react} className='react-logo' alt='react'/>
                            <p>React Js</p>
                        </div>
                        <div className='box-1'>
                            <img src={redux} className='react-logo' alt='react'/>
                            <p>Redux</p>
                        </div>
                        <div className='box-1'>
                            <img src={html} className='react-logo' alt='react'/>
                            <p>HTML</p>
                        </div>
                        <div className='box-1'>
                            <img src={css} className='react-logo' alt='react'/>
                            <p>CSS</p>
                        </div>
                        <div className='box-1'>
                            <img src={js} className='react-logo' alt='react'/>
                            <p>JS</p>
                        </div>
                        <div className='box-1'>
                            <img src={bootstrap} className='react-logo' alt='react'/>
                            <p>BootStrap</p>
                        </div>
                    </div>     
                </div>
                <div className='frontEnd'>
                    <h1>BackEnd</h1>
                    <div className='boxes'>
                        <div className='box-1'>
                            <img src={node} className='react-logo' alt='react'/>
                            <p>Node Js</p>
                        </div>
                        <div className='box-1'>
                            <img src={express} className='react-logo' alt='react'/>
                            <p>Express Js</p>
                        </div>
                        <div className='box-1'>
                            <img src={mongo} className='react-logo' alt='react'/>
                            <p>Mongoo DB</p>
                        </div>
                        <div className='box-1'>
                            <img src={sql} className='react-logo' alt='react'/>
                            <p>SQL</p>
                        </div>
                    </div>
                    
                </div>
                <div className='frontEnd'>
                    <h1>Others</h1>
                    <div className='boxes'>
                        <div className='box-1'>
                            <img src={git} className='react-logo' alt='react'/>
                            <p>Git</p>
                        </div>
                        <div className='box-1'>
                            <img src={post} className='react-logo' alt='react'/>
                            <p>Postman</p>
                        </div>
                        <div className='box-1'>
                            <img src={vs} className='react-logo' alt='react'/>
                            <p>VsCode</p>
                        </div>
                        <div className='box-1'>
                            <img src={figma} className='react-logo' alt='react'/>
                            <p>Figma</p>
                        </div>
                        <div className='box-1'>
                            <img src={docker} className='react-logo' alt='react'/>
                            <p>Docker</p>
                        </div>
                    </div>    
                </div>
          </div>
       </div>
       <Footer></Footer>
    </>
  )
}
  
export default Skills