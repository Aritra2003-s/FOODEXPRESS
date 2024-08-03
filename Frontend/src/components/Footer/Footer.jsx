import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
   <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo_footer} alt="" className="logo_footer"/>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit saepe similique! Corrupti maxime magni mollitia ut, reprehenderit vel hic!</p>
           <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8101507172</li>
            <li>contact@foodexpress.com</li>
          </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2024 © Foodexpress.com - All Right Reserved.</p>
   </div>
  )
}

export default Footer