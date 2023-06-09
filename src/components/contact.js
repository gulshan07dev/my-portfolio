import React from 'react';
import contactBg from '../assists/contact-us.png'

const Contact = () => {
    return (
        <section id="contact" className="section flex">
            <header className="section-heading">Contact - <span>me</span></header>
            <div className="flex">
                <form>
                    <h2>Get In Touch</h2>
                    <label for="name">Name </label>
                    <input type="text" id="name" placeholder="enter your name.." required />
                    <label for="number">Phone no </label>
                    <input type="tel" id="number" placeholder="enter your phone no.." required />
                    <label for="email">Email </label>
                    <input type="email" id="email" placeholder="enter your email id.." required />
                    <label for="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="3" placeholder="enter your msg.." required></textarea>
                    <button className="btn-submit" type="submit" value="submit">send</button>
                </form>
                <div className="contact-bg">
                    <img src={contactBg} alt="contact-bg" />
                </div>

            </div>
        </section>
    );
}

export default Contact;
