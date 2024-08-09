import React from 'react'
import'./Slide.css'
import dark_arrow from '../../assets/dark_arrow.png'
const SlideComponent = () => {
  return (
    <div className='slider container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world </h1>
        <p>Our Cutting-edge curriculum is designed to empower students with the knowledge,skills, and expriences needed to excel
          in the dynamic field of education
        </p>
        <button className='btn'>Explore More here <img src={dark_arrow} 
        alt="arrow" /></button>
      </div>
      
    </div>
  )
}

export default SlideComponent
