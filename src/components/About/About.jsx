import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
          <img className='about_img' src={about} alt="" />
            <img className='play_icon' src={play_icon} alt="" onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
          <h3>About University</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Eudisty University, established in [1900], has quickly become a beacon of academic excellence and innovation. Located in the heart of [New York], Eudisty University prides itself on fostering a vibrant and inclusive community. With a diverse range of programs and a strong emphasis on research and practical learning, the university prepares its students to excel in a rapidly changing world. Eudisty’s commitment to sustainability, technological advancement, and global engagement ensures that its graduates are well-equipped to tackle the challenges of the future. Whether in the arts, sciences, or professional disciplines, Eudisty University remains dedicated to nurturing the next generation of leaders and innovators.</p>
          <p>Eudisty University offers an extensive array of courses designed to meet the diverse interests and career aspirations of its students. From cutting-edge programs in computer science and engineering to comprehensive studies in the humanities and social sciences, the university ensures a well-rounded education.</p>
          <p>The curriculum is continuously updated to reflect the latest advancements and industry trends, integrating practical skills with theoretical knowledge. Eudisty University is at the forefront of technological innovation, providing students with access to the latest tools and resources. State-of-the-art laboratories, interactive learning platforms, and advanced research facilities enable students to gain hands-on experience and develop critical thinking skills. The university's commitment to technology is evident in its emphasis on digital literacy, cybersecurity, artificial intelligence, and other emerging fields, preparing graduates to excel in an increasingly digital world.</p>
        </div>
      </div>
    </div>
  )
}

export default About
