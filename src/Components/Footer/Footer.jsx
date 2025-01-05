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
            <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1" target="_blank"><FaInstagram className='logos'/></a>
            <a href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedin className='logos'/></a>
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