import Link from 'next/link'
import Layout from '../components/layout'
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      comment: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can add your logic to handle the form submission here
      console.log('Form submitted:', formData);
    };
  
    return (
        <container>
            <div className = "flex place-content-center m-5">
                <div className="flex bg-sky-500 place-content-start px-8">
                <form onSubmit={handleSubmit}>
                <div className= "my-2">
                    <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className= "my-2">
                    <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className= "my-2">            
                    <label>
                    Comment:
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                    <button type="submit">Submit</button>
                </form>
                </div>
            </div>
        </container>
    );
  };
  
  export default ContactForm;
  