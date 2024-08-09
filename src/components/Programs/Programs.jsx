import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'
import lable_1 from '../../assets/lable_1.png'
import lable_2 from '../../assets/lable_2.png'
import lable_3 from '../../assets/lable_3.png'


const Programs = () => {
  return (
    <div>
        <div className="programs">
     <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={lable_1} alt="" />
            <p>Graduation Degree</p>
        </div>
     </div>
     <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={lable_2} alt="" />
            <p>Masters Degree</p>
        </div>
     </div>
     <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={lable_3} alt="" />
            <p>Post Graduation</p>
        </div>
     </div>
     </div>
    </div>
  )
}

export default Programs
