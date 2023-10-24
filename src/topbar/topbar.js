import React from 'react'
import { useRef } from 'react'
import {FaFacebook} from "react-icons/fa"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
 import {AiFillTwitterCircle} from "react-icons/ai";
import "./topbar.css"


const Topbar = () => {
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
      <h3 className="logo">B_IT</h3>
        <nav ref = {navRef}>
        <a  href='/#'>home</a>
        <a href='./services'>pricing</a>
        <a href='/#'>about</a>
        <a href='/#'>contacts</a>
        <span className='socials'>
        <span className="social-icons"> <FaFacebook/></span>
        <span className="social-icons"><FaInstagram/></span>
        <span className="social-icons"><AiFillTwitterCircle/></span>
        </span>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
      <FaBars/>
        </button>
    </header>
  )
}



export default Topbar
