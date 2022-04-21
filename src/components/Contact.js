import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='contact'>
            <ContactForm />
            <ContactList />
        </div>
    )
}

export default Contact