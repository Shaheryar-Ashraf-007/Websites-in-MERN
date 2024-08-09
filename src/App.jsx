import React from 'react'
import { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import Slide from './components/Hero/Slide'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'


const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Slide/>
      <div className="container">
        <Title subTitle = 'Our PROGRAM' Title = 'What We Offer'/>
        <Programs/>
        <About setPlayState = {setPlayState}/>
        <Title subTitle = 'Gallary' Title = 'Campus Photos'/>
        <Campus/>
        <Title subTitle = 'Testimonials' Title = 'What Students Says'/>
        <Testimonials/>
        <Title subTitle = 'Contact Us' Title = 'Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer/>
      
      <video playState = {playState} setPlayState = {setPlayState}/>
    </div>
  )
}

export default App
