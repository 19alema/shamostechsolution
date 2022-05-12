import React from 'react'
import "./Footer.css"
import Gallery from "../../constants/images"
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer_info">
          <img src={Gallery.Design} alt="logo" />
          <p className="motto">
            Empowering you with technology
          </p>
        </div>
        <div className="Footer_info">
          <h1>Conatct Us</h1>
          <div className="Contact_box">
            <h4>Address</h4>
            <p>Prime Tower, Nakulabye</p>
            <p>Suite 15, Kampala, Uganda</p>
           </div>
          <div className="Contact_box">
            <h4>Email</h4>
            <p>support@shamostechsolutions.com</p>
           </div>
          <div className="Contact_box">
            <h4>Phone</h4>
            <p>+(256) 701407936</p>
           </div>
        </div>
        <div className="Footer_info">
          <h1>Services</h1>
          <a href="http://">Apps Developer</a>
          <a href="http://">Graphices Design</a>
          <a href="http://">Web Developer</a>
          <a href="http://">Data Analysis</a>
          <a href="http://">Consultance</a>
        </div>
        <div className="Footer_info">
          <h1>Get In Touch</h1>

          <p>Enter your email and we'll send you more information.</p>
          <input type="email" className='Footer__input' name="email" placeholder='Your Email' id="email" />
          <button className="Footer_btn" type="submit">Subscribe</button>
        </div>
  
      </div>

      <p className="copyright">&copy; Copyright {new Date().getFullYear()}. Shamos Tech Solutions</p>
    </div>
  )
}

export default Footer