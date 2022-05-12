import React from 'react'
import "./Contact.css"

import SubHeader from "../../components/subHeader/subHeader";
import Technology from "../../components/Technologies/Tech"

function Contact() {
  return (
    <div className="contact__section">
      <SubHeader title="Technologies We Work With"/>
      <Technology />

      <div className="contact-container">
        <div className="Contact__box">
          <div className="Contact_info">
            <h2 className=''>
              More experienced in building digital products and we are just getting started
            </h2>
            <p className="text-xl">
              Whether it is custom software development, value added service of content production, we approach every task with the most highly skilled resources in the field
            </p>
          </div>
          <form action="">
            <div className="form_header">
              <h2 className="capitalize text-2xl font-bold">Request Quote</h2>
              <p>
                Fill all fields so we can get some info about your project choice and your esitimated budget.
              </p>
            </div>

            <div className="input__field">
              <label htmlFor="Name">Name</label>
              <input type="text" name="name" id="name"  />
            </div>
            <div className="input__field">
              <label htmlFor="Email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="input__field">
              <select name="Service" id="service">
                <option className="Selected" selected>Select Service</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Graphics Design">Graphices Design</option>
                <option value="Conultancy">Consultancy</option>
              </select>
            </div>
            <div className="input__field">
              <select name="Budget" id="Budget">
                <option value="" className="Selected" selected>Budget Range</option>
                <option value="Shs 100,000"> Shs.100,000 - shs 250,000</option>
                <option>shs 300,000 - shs 500,0000</option>
                <option>shs 500,000 above</option>
              </select>
            </div>
            
            <button className="form__btn uppercase">Send Request</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact