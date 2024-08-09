import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import next_arrow from '../../assets/next_arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ceeb9843-5431-4445-bb2f-6f8d6ca81834");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='Contact'>
      <div className="contact-col">
        <h3>Send us a Message </h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio error ex iusto cumque voluptate, mollitia laborum unde dolores laudantium a? Aliquam optio eum quia officiis ad dolorem. Tempora, ut provident.
        </p>
        <ul>
            <li><img src={msg_icon} alt="" />shaheryarashraf824@gmail.com </li>
            <li><img src={phone_icon} alt="" />+44 7448-948-124 </li>
            <li><img src={location_icon} alt="" />E14, London <br />Canary Wharf United Kingdom </li>
            <li></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Your name here' 
          required/>
          <label> Your Number</label>
          <input type="tel" name='Phone' placeholder='Your number here' 
          required />
          <label>Write Your Message here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='Submit-btn'>Submit Now <img src={next_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}


export default Contact
