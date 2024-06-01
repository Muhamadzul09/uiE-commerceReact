import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='image' src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam similique placeat ratione magni voluptas autem sed recusandae laboriosam! Molestiae.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center"> 
            <h2>COMPANY</h2>
            <ul>
                <a href='#home'>Home</a>
                <a>About</a>
                <a>Delivery</a>
                <a>Privacy Polici</a>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+62-0812-5897-7482</li>
                <li>ustaznaruto@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 ZulDev  All Right Reserved</p>
    </div>
  )
}

export default Footer
