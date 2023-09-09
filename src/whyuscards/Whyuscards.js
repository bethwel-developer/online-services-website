import React from 'react'
import "./whyuscards.css"
import {BsTrophy} from "react-icons/bs"


const Whyuscards = () => {
    return (
    <div className='whyuscard-section'>
    <div className='whyus-card'>
        <span className='why-icons'><BsTrophy/></span>
      <h3 className='h2 whycard'>REPUTATION</h3>
      <h4>Our reputation is the best guarantee.</h4>
    </div>

    <div className='whyus-card'>
        <span className='why-icons'><BsTrophy/></span>
      <h3 className='h2 whycard'>IMPECCABLE
RESULTS</h3>
      <h4>Our reputation is the bMost of our agents have been with us since the beginning.
They are the true professionals you can trust.</h4>
    </div>

    <div className='whyus-card'>
        <span className='why-icons'><BsTrophy/></span>
      <h3 className='h2 whycard'>EXTENSIVE
EXPERIENCE</h3>
      <h4>Most of our agents have been with us since the beginning.
They are the true professionals you can trust</h4>
    </div>

    <div className='whyus-card'>
        <span className='why-icons'><BsTrophy/></span>
      <h3 className='h2 whycard'>WE ARE
TRUSTED</h3>
      <h4>We work to bring about the result and experience that will make you trust us.</h4>
    </div>
    </div>
  )
}

export default Whyuscards
