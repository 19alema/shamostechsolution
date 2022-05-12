import React from 'react'
import "./Recentwork.css"

import SubHeader from '../../components/subHeader/subHeader';
import Gallery from "../../constants/images";

function Recentwork() {

  return (
    <div className="recent_work-section">
      <div className="Recent__work">
        <div className="Recent__header">
            <SubHeader title="Our Recent work" />
        </div>

        <div className="Recent_work-container">
          <div className="Recent-img">
            <img src={Gallery.HecticMobile} alt="Project"/>
          </div>
          
          <div className="Recent_work-desc">
            <h3 className="text-3xl">
              Hictic-revolutional traditional advertising & digital marketing
            </h3>

            <p className="text-sm py-7">
              Launch new adverts and engage with your customers - an all - in-one platfrom that promotes your brand and builds engagement
            </p>

            <button className="Recent__btn uppercase">
              place quote
            </button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Recentwork