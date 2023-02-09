import React, { useRef } from 'react'
//import emailjs from '@emailjs/browser'
import './contact.style.scss'

function Contact() {


    const firstNameRef = useRef(null)
    const lastNameRef =  useRef(null)
    const emailRef = useRef(null)
    const messageRef =  useRef(null)

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert('terkirim')
    }

    return (
        <div  className="container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="name">
                    <label htmlFor="firstName" id="nameLabel">First Name</label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="firstName" 
                        ref={firstNameRef} 
                        tabIndex="1" 
                    />
                    
                    <label htmlFor="lastName">Last name</label>
                    <input  
                        type="text" 
                        id="lastName" 
                        className="lastName" 
                        ref={lastNameRef}
                        tabIndex="2"  
                    />
                </div>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email"
                id="email"
                className="email"
                placeholder="example@corp.com"
                ref={emailRef}
                tabIndex="3" 
                />

                <label htmlFor="message">Message</label>
                <textarea 
                placeholder="Start typing..." 
                className="message" 
                name="message"
                ref={messageRef}
                >

                </textarea>
                <button type="submit" className="send">Send</button>
            </form>
        </div>
    )
}

export default Contact