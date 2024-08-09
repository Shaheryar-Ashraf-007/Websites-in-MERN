import React, { useRef } from 'react'
import './Testimonials.css'
import next_arrow from '../../assets/next_arrow.png'
import back_arrow from '../../assets/back_arrow.png'
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'

const testimonial = () => {

  const slider2 = useRef(null);
  let tx = 0;

  

  const slideForward =()=>{

    if(tx > -1100){
        tx -= 550;
    }
    if(slider2.current){
    slider2.current.style.transform = `translateX(${tx}px)`;
    }
  };

  const slideBackward =()=>{
    if(tx<0){
        tx +=550;
    }
    if(slider2.current){
      slider2.current.style.transform = `translateX(${tx}px)`;
    }
      
  };
  return (
    <div className='Testimonials'>

      
      
        <img src={next_arrow} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_arrow} alt="" className='back-btn' onClick={slideBackward}/>

        <div className="slider2">
          <ul ref={slider2}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src= {user_1} alt="" />
                  <div>
                    <h3>Wialliam Jackson</h3>
                    <span>Eudisity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, maiores rerum. Ipsum exercitationem necessitatibus architecto voluptatem ratione aperiam sit distinctio, sint, perspiciatis ipsa nisi sequi hic molestiae quam laborum impedit. Dolorem autem, soluta facilis sequi fugiat accusamus eveniet tenetur aut nulla ut atque alias enim repellendus corrupti architecto, eius qui.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src= {user_2} alt="" />
                  <div>
                    <h3>Wialliam Jackson</h3>
                    <span>Eudisity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, maiores rerum. Ipsum exercitationem necessitatibus architecto voluptatem ratione aperiam sit distinctio, sint, perspiciatis ipsa nisi sequi hic molestiae quam laborum impedit. Dolorem autem, soluta facilis sequi fugiat accusamus eveniet tenetur aut nulla ut atque alias enim repellendus corrupti architecto, eius qui.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src= {user_3} alt="" />
                  <div>
                    <h3>Wialliam Jackson</h3>
                    <span>Eudisity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, maiores rerum. Ipsum exercitationem necessitatibus architecto voluptatem ratione aperiam sit distinctio, sint, perspiciatis ipsa nisi sequi hic molestiae quam laborum impedit. Dolorem autem, soluta facilis sequi fugiat accusamus eveniet tenetur aut nulla ut atque alias enim repellendus corrupti architecto, eius qui.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src= {user_4} alt="" />
                  <div>
                    <h3>Wialliam Jackson</h3>
                    <span>Eudisity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, maiores rerum. Ipsum exercitationem necessitatibus architecto voluptatem ratione aperiam sit distinctio, sint, perspiciatis ipsa nisi sequi hic molestiae quam laborum impedit. Dolorem autem, soluta facilis sequi fugiat accusamus eveniet tenetur aut nulla ut atque alias enim repellendus corrupti architecto, eius qui.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    
  )
}

export default testimonial
