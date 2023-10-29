import React from 'react'
import './reputation.css'
import {HiUsers} from "react-icons/hi"
import { FaBusinessTime } from 'react-icons/fa'
import { FaIcons } from 'react-icons/fa'
import { FaShieldVirus} from 'react-icons/fa'




const Reputation = () => {
  return (
    <div className='reputation-section'>
        <div className='rep1'>
       <span className= "rep-icons"><HiUsers/></span> 
        <h4>1200340</h4>
        <h4>USERS</h4>
      </div>

    
      <div className='rep1'>
       <span className= "rep-icons"><FaShieldVirus/></span> 
        <h4>800</h4>
        <h4>SECURED SITES</h4>
      </div>


    
       <div className='rep1'>
       <span className= "rep-icons"><FaBusinessTime/></span> 
        <h4>120</h4>
        <h4>BUSINESSES</h4>
      </div>


    
      <div className='rep1'>
       <span className= "rep-icons"><FaIcons/></span> 
        <h4>1450</h4>
        <h4>SOCIAL MEDIA</h4>
      </div>
    </div>
  )
}


export default Reputation
