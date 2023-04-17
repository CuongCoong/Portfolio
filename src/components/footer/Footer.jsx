import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				HARRY CONG
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonial">Testimonial</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a href="https://facebook.com">
					<FaFacebookF></FaFacebookF>
				</a>
				<a href="https://instagram.com">
					<FaInstagram></FaInstagram>
				</a>
				<a href="https://twitter.com">
					<FaTwitter></FaTwitter>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
