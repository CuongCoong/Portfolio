import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skill I Have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Developer</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>HTML</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>CSS/SCSS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>JavaScript</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>Bootstrap</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>TailWind</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>ReactJS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>VueJS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
					</div>
				</div>
				{/* END OF FRONTEND */}
				<div className="experience__backend">
					<h3>Backend Developer</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>Node JS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>PHP</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>MySQL</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
							<div className="">
								<h4>Java</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
