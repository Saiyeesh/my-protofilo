import "./Footer.css"
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='footerBack'>
        <h2>Yellarm Saiyeesh</h2>
        <div className='footer-logos'>
            <a href="https://www.facebook.com/" target="_blank"><FaFacebook className='logos'/></a>
            <a href="https://www.instagram.com/_yeesh_04/profilecard/?igsh=eGZpc2RwNGV5djJm" target="_blank"><FaInstagram className='logos'/></a>
            <a href='https://www.linkedin.com/in/sai-yeesh-482743258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><FaLinkedin className='logos'/></a>
            <a href="" target="_blank"><FaTwitter className='logos'/></a>
        </div>
        <div className='footerLast'>
          <FaRegCopyright />
          <p> 2024 Yellarm Saiyeesh. All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer