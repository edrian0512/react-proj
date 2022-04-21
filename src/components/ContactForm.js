import React, { useRef, useState } from 'react'

const contactInfo = (localStorage.getItem('contactDetails')) ? JSON.parse(localStorage.getItem('contactDetails')) : [];

const ContactForm = () => {

    const [contactList, setContactList] = useState(contactInfo);


    console.log(contactList)

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();


        // holds contact submission
        const contactObject = {
            id: Date.now(),
            fName: firstNameRef.current.value,
            lname: lastNameRef.current.value,
            emailAd: emailRef.current.value,
            msg: messageRef.current.value
        }
        console.log(contactObject)


        // list.push(contactObject);
        setContactList([...contactList, contactObject]);
        localStorage.setItem('contactDetails', JSON.stringify(contactList));
        
        console.log(contactObject)

        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
    }

    return (
        <div>
            <h4>Contact Form</h4>
            <form onSubmit={onFormSubmit}>
                {/* <label>First Name:</label> */}
                <input type='text' name='firstName' ref={firstNameRef} placeholder='First Name' />

                <br />

                {/* <label>Last Name:</label> */}
                <input type='text' name='lastName' ref={lastNameRef} placeholder='Last Name' />

                <br />

                {/* <label>Email:</label> */}
                <input type='text' name='email' ref={emailRef} placeholder='Email' />

                <br />

                {/* <label>Message:</label><br/> */}
                <textarea name='message' cols='30' rows='10' ref={messageRef} placeholder='Message'></textarea>

                <br />

                <input type='submit' value='Submit' name='submit' />
            </form>
        </div>
    )
}

export default ContactForm
