import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_0nrr1as', 'template_o0zt47v', form.current, 'RQfy4yL9KXRkwOwHk');
		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon"></MdOutlineEmail>
						<h4>Email</h4>
						<h5>congngocuong1506@gmail.com</h5>
						<a href="mailto:congngocuong1506@gmail.com" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon"></RiMessengerLine>
						<h4>Messenger</h4>
						<h5>Công Cường</h5>
						<a href="https://www.facebook.com/profile.php?id=100005048838762" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon"></BsWhatsapp>
						<h4>WhatApp</h4>
						<h5>0889008393</h5>
						<a href="https://chat.zalo.me/" target="_blank">
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="Your Full Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea name="message" rows="7" placeholder="Your Message" required></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
