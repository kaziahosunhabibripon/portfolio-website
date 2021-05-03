import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_cna55yj', e.target, 'user_lAQQjlk69dAjq9sQS1kf2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <div className="container pt-2 myAnimationLeft" id="contact">
                <h1 className="text-center text-white">Contact From</h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-md-8 from-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-md-8 from-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-md-8 from-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-md-8 from-group pt-2 mx-auto">
                            <textarea type="text" className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-md-8 from-group pt-3 mx-auto">
                            <input type="submit" className="btn btn-info submit-div text-white" value="Send Mail" />
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
}
