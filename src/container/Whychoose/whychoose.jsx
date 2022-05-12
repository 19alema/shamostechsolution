import React from 'react'
import "./Whychoose.css"
import Gallery from "../../constants/images"
function whychoose() {
  return (
    <div className="App__banner">
      <div className="App__banner-container">
        <div className="banner__left">
          <div className="banner__header">
            <p className="banner_sub-title">
              we are committed with our services

              <div className="main_title py-6">
                <h2 className="h2 capitalize text-3xl">
                   why you should choose Us
                  <div></div>
                </h2>
              </div>
            </p>
          </div>

          <div className="banner-info">
            <div className="info">
              <h4>Do the right thing</h4>
              <p>
                We are admired and respected for our commitment to honesty,trust and transparency. We do the right thing even when no one is watching.
              </p>
            </div>
            <div className="info">
              <h4>
                Respect
              </h4>

              <p>
                We maintain a healthy level of respect for our customers, industry, our team and competitors because it's smart business.
              </p>
            </div>
            <div className="info">

              <h4>
                Getting it done
              </h4>

              <p>
                Clients trust us to build things that work and we take that seriously. Our team will overcome obstacles, find solutions and deliver exceptional results.
              </p>
            </div>
            <div className="info">
              <h4>
                Diversity
              </h4>
              <p>
                Diversity is more than just the sum of our many parts. It's our superpower not just the right thing to do but how we win. Whether through diversity of background, experience, opinions, or views. It's how we build a sustainable business.
              </p>
            </div>
          </div>


        </div>
        

        <div className="banner-right">
            <img src={Gallery.mobileApp} alt="" />
        </div>
       </div>
    </div>
  )
}

export default whychoose