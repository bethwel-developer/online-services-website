import React from 'react'
import "./requestform.css"

const Requestform = () => {
  return (
    <div className='fdbck-form'>
   
    <div className='inputs'>
    <h1>feedback</h1>
    <h3>please share your feedback in the comment field</h3>
    <input placeholder='First name'></input>
    <input placeholder='Last name'></input>
    <input placeholder='Email'></input>
    <input placeholder='Phone'></input>
<button className='submit-button'>SUBMIT</button>
    </div>
   <div>
    <img className='Rform-img' src='.\bg9.jpg' alt=''></img>
    </div>
 

   
    </div>
  )
}

export default Requestform
