import React from "react";
import Background from "./background.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import WOW from "wowjs";
import Rocket from "../img/rocket.png";

// Setting props to scroll (about, projects, contact)
class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
		this.projects = React.createRef();
		this.contact = React.createRef();
		this.scrolling = this.scrolling.bind(this);
	}

	// Initiate WOW animation
	componentDidMount() {
		new WOW.WOW().init();
	}

	// When scrolling down Navbar will scroll down as well
	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	// Setting scrolling behavior
	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {

		return (

			// Div that contains 
			<div>

				{/* Adding animations to Background file */}
				<Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
				/>

				{/* Inserting Navbar*/}
				<nav
					id="navbar"
					className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">

						{/* When the rocket image is clicked, it returns the user to the homepage */}
						{/* eslint-disable-next-line */}
						<a
							className="home-style navbar-brand"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>
							
							{/* Rocket image on Navbar */}
							{/* eslint-disable-next-line */}
							<img 
							id="rocket"
							src={Rocket}
							/>
						</a>

						{/* A narvbar-dropdown menu for smaller screens */}
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>

						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div className="navbar-nav">

								{/* When "About" is clicked, the page scrolls all the way down to the About section */}
								{/* eslint-disable-next-line */}
								<a
									onClick={() => {
										this.scrolling(this.about);
									}}
									className="btn-style nav-item nav-link">
									About
								</a>

								{/* When "Projects" is clicked, the page scrolls all the way down to the Projects section */}
								{/* eslint-disable-next-line */}
								<a
									onClick={() => {
										this.scrolling(this.projects);
									}}
									className="btn-style nav-item nav-link">
									Projects
								</a>

								{/* When "Contact" is clicked, the page scrolls all the way down to the Contact section */}
								{/* eslint-disable-next-line */}
								<a
									onClick={() => {
										this.scrolling(this.contact);
									}}
									className="btn-style nav-item nav-link">
									Contact
								</a>

							</div>

						</div>

					</div>

				</nav>
				
				{/* Adding animations to About file */}
				<About
					ref={this.about}
					id="about-container"
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
				/>

				{/* Adding animations to Projects file */}
				<Projects
					ref={this.projects}
					id="my-projects"
					fadeInRight={"wow fadeInRight"}
					fadeInLeft={"wow fadeInLeft"}
				/>

				{/* Adding animations to Contact file */}
				<Contact
					ref={this.contact}
					id="my-contact"
					fadeInRight={"wow fadeInRight"}
					fadeInLeft={"wow fadeInLeft"}
				/>

			</div>
		);
	}
}

// Exports navbar to index.js
export default Navbar;