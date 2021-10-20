import React, { useRef } from 'react';
import Phone from '../../assets/phone_img.png';
import Email from '../../assets/email_img.png';
import Address from '../../assets/address_img.png';

import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    const formRef = useRef();

/* Use email.js */
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_2r2pxvp', 'template_1u4c6dc', formRef.current, 'user_ssQeZXemBZwlrNSJZ8wgx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    };


    return (
        <div className="contact">
            <div className="contact-bg">

            </div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        Let's discuss your project
                    </h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img 
                                src={Phone}
                                alt=""
                                className="contact-icon"
                            />
                            1 222 2343 23
                        </div>
                        <div className="contact-info-item">
                            <img className="contact-icon" src={Email} alt="" /> contact@turtles.dev
                        </div>
                        <div className="contact-info-item">
                            <img className="contact-icon" src={Address} alt="" /> 245 King Street, Nowhere Victoria 8000 Finland
                        </div>
                        
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                    <b>What's your story?</b> Get in touch. Always-freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;