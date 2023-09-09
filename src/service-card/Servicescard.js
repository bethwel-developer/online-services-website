import React from 'react'
import "./servicescard.css"
const servicescard = () => {
  return (
    <div className='servicescard-section'>
      <div className='card'>
        <div className='card-header'><h3>WEB DESIGN</h3></div>
        <img className='card-img' src='.\card1.jpg' alt=''></img>
        <h4>From</h4>
        <h2 className='h2-card'>USD 200</h2>
        <button className='quote-button3'>GET A QUOTE</button>
      </div>


      <div className='card'>
        <div className='card-header'><h3>WEB HOSTING</h3></div>
        <img className='card-img' src='.\card1.jpg' alt=''></img>
        <h4>From</h4>
        <h2 className='h2-card'>USD 200</h2>
        <button className='quote-button3'>GET A QUOTE</button>
      </div>

      <div className='card'>
        <div className='card-header'><h3>SEO CONTENT</h3></div>
        <img className='card-img' src='.\card1.jpg' alt=''></img>
        <h4>From</h4>
        <h2 className='h2-card'>USD 200</h2>
        <button className='quote-button3'>GET A QUOTE</button>
      </div>

      <div className='card'>
        <div className='card-header'><h3>DIGITAL MARKETING</h3></div>
        <img className='card-img' src='.\card1.jpg' alt=''></img>
        <h4>From</h4>
        <h2 className='h2-card'>USD 200</h2>
        <button className='quote-button3'>GET A QUOTE</button>
      </div>

    </div>
  )
}

export default servicescard
