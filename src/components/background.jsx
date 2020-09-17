import React from "react";
import PropTypes from "prop-types";
import WOW from "wowjs";

// Exports projects to React.Component in index.js
export default class Background extends React.Component {

	componentDidMount() {

		new WOW.WOW().init();

	}

	render() {

		return (

			// Div that contains a introduction and a button that scrolls down to the about section page
			<div 
			id="my-background" 
			className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">

					{/* A welcome introduction */}
					<h1
					id="background-title"
					className={this.props.fadeInLeft}
					>
						Welcome to Jesus' Portfolio
					</h1>

					{/* A button named "Explore" */}
					<button
						id="button-explore"
						className={"work-button " + this.props.fadeInRight}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
							Explore
					</button>

				</div>
				
			</div>
		);
	}
}

// Array of propTypes to access them
Background.propTypes = {
	fadeInLeft: PropTypes.string,
  	fadeInRight: PropTypes.string,
};
