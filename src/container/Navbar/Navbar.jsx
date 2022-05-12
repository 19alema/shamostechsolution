import React, {useState} from 'react'
import "./Navbar.css"
import {
  AiOutlineMenu
} from "react-icons/ai";

import {
  FaTimes
} from "react-icons/fa";

import Gallery from "../../constants/images";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  // Function to close nav
  function closeNav() {
     setNavbar(prev => !prev) 
  }

  // Function to open navbar
  function openNav() {
    setNavbar(prev => !prev)
  }
  return (
    <div className="Navbar__container flex items-center justify-between px-2">
      <div className="App__logo">
        <img className="w-28 h-10" src={Gallery.Logo} alt="logo" />
      </div>
      {/* Nav toggle for small screens */}
      
      <div className="toggle">
        {!navbar?
            (<AiOutlineMenu
              className="mobile_toggle menuBar text-xl font-bold cursor-pointer"
              onClick={openNav}
            />
            ): (
            <FaTimes
              className='close_toggle closeBar text-xl cursor-pointer'
              onClick={closeNav}
            />
            )
        }
      </div>
{/* smallscreen navbar links */}
      {navbar && (<div className="navbar mobile_navbar capitalize">  
     <nav>
          <ul>
            <li>
              <a href="http://">Services</a>
            </li>
            <li>
              <a href="http://">Solutions</a>
            </li>
            <li>
              <a href="http://">work</a>
            </li>
            <li>
              <a href="http://">about</a>
            </li>
            <li>
              <a href="http://">Contact</a>
            </li>
          <li className = "btn"> Estimate Project </li>
            
          </ul>
        </nav>

      </div>)
      }  

{/* Desktop screen nav links */}
      <div className="desktop_navbar navbar">
        <nav>
          <ul>
            <li>
              <a href="http://">Services</a>
            </li>
            <li>
              <a href="http://">Solutions</a>
            </li>
            <li>
              <a href="http://">work</a>
            </li>
            <li>
              <a href="http://">about</a>
            </li>
            <li>
              <a href="http://">Contact</a>
            </li>
            <li className = "btn"> Estimate Project </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar