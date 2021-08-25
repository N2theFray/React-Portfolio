import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
      <div>
    <section >
      <h1 data-testid="h1tag" class="h1-responsive font-weight-bold text-center my-4">Contact me</h1>
      <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. <br/>Email: Blacksteven1@gmail.com </p>
      
        <div class="col-md-9 mb-md-0 mb-5 mx-auto ">
            <form className="card col-12 d-flex justify-content-center py-3" id="contact-form" onSubmit={handleSubmit}>

            <div className="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" defaultValue={name} onBlur={handleChange}/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" defaultValue={email} onBlur={handleChange}/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
            </div>

            <div>    

                <div class="row">
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" defaultValue={message} onBlur={handleChange}></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                

                <div class="text-center text-md-left">
                    <button class="btn btn-primary" data-testid="button" type="submit">Send</button>
                </div>

            </div>    

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                
            </form>
        </div>

    </section>

    </div>
  );
}

export default ContactForm;
