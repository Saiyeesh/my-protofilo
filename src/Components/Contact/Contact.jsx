import "./Contact.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useState } from "react"

function Contact() {

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('');

  const onChangeBtn = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOfSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://myprotobackend.onrender.com/api/num', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      }); 

      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      setStatus('Network error. Please try again later.');
      console.error('Error:', error); 
    }
    setFormData({
      email: '',
      name: '',
      subject: '',
      message: '' 
    });
  };

  return (
     <>
     <Navbar></Navbar>
     <div className='contactMain'>
       <div className='contactback'>
            <h1>Contact</h1>
            <p>Feel free to reach out to me for any questions or oppurtunities</p>
                <form onSubmit={handleOfSubmit} className='contactBox'>
                        <h3>Email Me</h3>
                        <input type='text' value={formData.email} name="email" onChange={onChangeBtn} className='InputBoxes' placeholder="Your Email"/>
                        <input type='text' value={formData.name} name="name" onChange={onChangeBtn} className='InputBoxes' placeholder='Your Name'/>
                        <input type='text' value={formData.subject} name="subject" onChange={onChangeBtn} className='InputBoxes' placeholder='Subject'/>
                        <textarea type='text' value={formData.message} name="message" onChange={onChangeBtn} className='areaBox' placeholder='Message'/>
                        <button type='submit'>Send</button>
                </form>
                <p>{status}</p>
            </div>
       </div>
       <Footer></Footer>
     </>
  )
}

export default Contact
