import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
import './ContactForm.scss'

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)
  const [emailError, setEmailError] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value })
  }

  const handleSubjectInputChange = (event) => {
    setValues({ ...values, subject: event.target.value })
  }

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value })
    if (!isValidEmail(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const handleMessageInputChange = (event) => {
    setValues({ ...values, message: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name && values.subject && values.email && !emailError) {
      setValid(true)
      emailjs.sendForm('service_6ld2bcd', 'template_k8v4nhw', form.current, 'user_gXeV0nUT7NGxVTLulkZvI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    setSubmitted(true)
  }

  return (
    <div class="contactform">
      <form class="register-form" ref={form} onSubmit={handleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for completing the contact form</div> : null}
        <input
          onChange={handleNameInputChange}
          value={values.name}
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
        />
        {submitted && !values.name ? <span id="first-name-error">Please enter a name</span> : null}
        <input
          onChange={handleSubjectInputChange}
          value={values.subject}
          id="subject"
          class="form-field"
          type="text"
          placeholder="Subject"
          name="subject"
        />
        {submitted && !values.subject ? <span id="last-name-error">Please enter a subject</span> : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email || emailError ? <span id="email-error">Please enter an email address</span> : null}
        <textarea 
          onChange={handleMessageInputChange}
          value={values.message}
          id="message"
          class="form-field"
          placeholder="your message / question"
          name="message"
          rows={8}
        />
        <button class="form-field" type="submit">
          Send to us
        </button>
      </form>
    </div>
  )
}

export default ContactForm