import React from 'react'
import "./Service.css";
import Gallery from "../../constants/images"
function Service() {
  return (
    <div className="Service__container">
      <div className="Service">
        <div className="Service__header">
          <p className="uppercase text-md">
            design.development.consultancy
          </p>
          <h2 className="text-xl py-4 color-black-500">
            Develop results-driven products for entreprenuers, startups, and enterprices with a loading software development company.
          </h2>
        </div>

        <div className="Services">
          <div className="Single_service">
            <img src={Gallery.smartPhone} alt="App_dev" />
            <p className="title">
              App development
            </p>
          </div>
          <div className="Single_service">
           
            <img src = {
              Gallery.codingPng
            }
            alt = "Web_dev" />
            <p className = "title">
              Web Development
            </p>

          </div>
          <div className="Single_service">

             <img src = {
               Gallery.dataAnalysis
             }
             alt = "data_analysis" />
               <p className = "title">
             Data Analysis
            </p>

          </div>

          <div className="Single_service">
            <img src = {
              Gallery.myDesign
            }
              alt="App_dev" />
            
              <p className = "title">
              Graphics Design
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Service