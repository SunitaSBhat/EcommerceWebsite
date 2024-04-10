import React from 'react'
import "./boxProducts.css";
import  electronicitems from "./Electronicitems.png";
import HomeFurniture from  "./HomeFurniture.jpg";
import fashionTrends from "./fashionTrends.jpg";
import gamingPc from "./gamingPc.jpg";
function boxProducts() {
  return (
    <div>
      <h2>Hey! Come Check Out Some offers!!</h2>
      <div className='main_class'>
      
        <div className='box_class'>
        
        <img src={electronicitems} alt="Electronic Items"/>
            <p>Offer:it has 10% off!..</p>
            <p>Hurry Up!!..</p>
            <p>Offer Expires Soon..</p>
            <button className='btn'>See More</button>
        </div>
        <div className='box_class'>
         <img src={HomeFurniture} alt="This is furniture"/>
            <p>Offer:it has 50% off!..</p>
            <p>Hurry Up</p>
            <p>Offer Expires Soon..</p>
            <button className='btn'>See More</button>
        </div>
        <div className='box_class'>
            <img src={fashionTrends} alt="product"/>
            <p>Offer:it has 20% off!..</p>
            <p>Hurry Up</p>
            <p>Offer Expires Soon..</p>
            <button className='btn'>See More</button>
        </div>
        <div className='box_class'>
            <img src={gamingPc} alt="product"/>
            <p>Offer:it has 40% off!..</p>
            <p>Hurry Up</p>
            <p>Offer Expires Soon..</p>
            <button className='btn'>See More</button>
        </div>
      </div>
    </div>
  )
}
export default  boxProducts