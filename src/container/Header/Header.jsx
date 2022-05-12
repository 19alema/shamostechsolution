import React from 'react'
import "./Header.css"

import Navbar from '../Navbar/Navbar';
import Hero from "../Hero/Hero";
import Gallery from "../../constants/images"

function Header() {
  return (
  <div className="Header__container">
    <div className="Header">
        <Navbar />
        <Hero />   
      </div>
      <img src={Gallery.shapeBg} alt="" />
  </div>
  )
}

export default Header