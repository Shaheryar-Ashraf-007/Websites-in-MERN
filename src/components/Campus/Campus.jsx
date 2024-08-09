import React from 'react'
import './Campus.css'
import campus_1 from '../../assets/campus_1.jpg'
import campus_2 from '../../assets/campus_2.jpg'
import campus_3 from '../../assets/campus_3.jpg'
import campus_4 from '../../assets/campus_4.jpg'



const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={campus_1}alt="" />
            <img src={campus_2}alt="" />
            <img src={campus_3}alt="" />
            <img src={campus_4}alt="" />
        </div>
        <div className="see-more">
            <button className='btn2'>See more here</button>
            </div>
        
    </div>
  )
}

export default Campus
