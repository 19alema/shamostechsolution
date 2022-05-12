import React from 'react'
import "./Hero.css"
import Gallery from "../../constants/images"
function Hero() {
  return (
    <div className="App__hero md:grid">
      <div className = "Hero__left ">
        <h1 className="text-4xl">
          Full-stack mobile app development company
        </h1>

        <p className="text-xl py-7">
          Delivering Sophistication through a Refined Process - We build purpose-driven mobile apps with your success in mind.
        </p>

        <button className="hero__btn">
          Let's Talk
        </button>
      </div>
      <div className="Hero__right">
        <div className="Hero__right-img">
          <img src={Gallery.Development} alt="Hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero