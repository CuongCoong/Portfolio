import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon"></FaAward>
							<h5>Experience</h5>
							<small>1+ Years Working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon"></FiUsers>
							<h5>Clients</h5>
							<small>200+ Worldwide </small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon"></VscFolderLibrary>
							<h5>Projects</h5>
							<small>20+ Completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga architecto commodi non,
						numquam quas nam magnam, officiis sapiente repellat sequi, fugit earum quo rem repudiandae?
						Aliquam dolore ratione minima?
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
