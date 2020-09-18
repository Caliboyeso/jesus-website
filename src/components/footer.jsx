import React from "react";
import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import resume from "./jesus-resume.pdf";

class Footer extends React.Component {

	render() {

		return (

			// Dic that contains links to Linkedin, GitHub, download link to my resume, and copyrights
			<div 
			id="footer" 
			className="container-fluid text-center py-5"
			>

					{/* Profile links */}
					<div 
					id="profile-links"
					className="row"
					>

							{/* Link to download resume */}
							<a
							id="resume"
							href={resume}
							target="_blank"
							rel="noopener noreferrer">
							<img className="img-fluid" src={codepen} alt=""/>
							</a>

							{/* Link to Github */}
							<a
							className="px-3"
							href="https://github.com/Caliboyeso"
							target="_blank"
							rel="noopener noreferrer">
							<img src={github} alt=""/>
							</a>

							{/* Link to Linkedin */}
							<a
							href="https://www.linkedin.com/in/jesus-lopez-357002a1/"
							target="_blank"
							rel="noopener noreferrer">
							<img src={linkedin} alt=""/>
							</a> 

					</div>

					{/* Copyright */}
					<h5
					id="copyright" 
					className="pt-4"
					>
						Jesus Lopez &copy; 2020
					</h5>

			</div>
		);
	}
}

// Exports code to index.js
export default Footer;
