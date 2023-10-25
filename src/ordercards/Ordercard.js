import React from 'react'
import "./ordercard.css"

const Ordercard = () => {
  return (
    <div>
       <div className='ordercard-section'>

      <div className='ordercard'>
        <div className='ordercard-header'> <h3>STARTER</h3></div>
          <div className='order-content'>
            <h5>Vivamus a fringilla lorem, vel faucibus ante. Nunc ullamcorper</h5>
            <h5>10% In hac habitasse platea</h5>
            <h5>10gb Praesent egestas ac arcu</h5>
            <h5>25 emails Sed eget aliquet nisl</h5>
            <h5>No Proin laoreet accumsan nisl non</h5>
            <button className='order-button'>ORDER NOW</button> 
       </div>
</div>


    <div className='ordercard-middle'>
    <div className='middle-header'> <h3>ADVANCED</h3></div>
          <div className='order-content'>
            <h5>Vivamus a fringilla lorem, vel faucibus ante. Nunc ullamcorper</h5>
            <h5>10% In hac habitasse platea</h5>
            <h5>10gb Praesent egestas ac arcu</h5>
            <h5>25 emails Sed eget aliquet nisl</h5>
            <h5>No Proin laoreet accumsan nisl non</h5>
            <button className='order-button'>ORDER NOW</button>
            
    </div>

    
      </div>

      <div className='ordercard'>
        <div className='ordercard-header'> <h3>PROFFESSIONAL</h3></div>
          <div className='order-content'>
            <h5>Vivamus a fringilla lorem, vel faucibus ante. Nunc ullamcorper</h5>
            <h5>10% In hac habitasse platea</h5>
            <h5>10gb Praesent egestas ac arcu</h5>
            <h5>25 emails Sed eget aliquet nisl</h5>
            <h5>No Proin laoreet accumsan nisl non</h5>
            <button className='order-button'>ORDER NOW</button>
            </div>
      </div>
    </div>
    </div>
  )
}


export default Ordercard
