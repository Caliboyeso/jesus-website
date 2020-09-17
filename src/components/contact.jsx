import React from "react";
import PropTypes from "prop-types";

// Exports projects to React.Component in index.js
export default class Contact extends React.Component {

	render() {

		return (

			// Div that contains the title, a contact form, and a submit button
			<div 
			id="my-contact" 
			className="container text-center my-5"
			>

			{/* Title for contact section */}
			<h1 
			id="contact" 
			className={"mb-3 " + this.props.fadeInRight}
			>
				Contact
			</h1>

			{/* A form tag used to create contact form with Formspree */}
			<form
			className={this.props.fadeInLeft}
			action="https://formspree.io/mzbjvlvr"
			method="POST">

				{/* Name of the user */}
				<div 
				className="form-group"
				>
					<div 
					className="row"
					>
						<div 
						className="col-12 col-sm-12 col-md-6 mx-auto"
						>
						<input
						type="text"
						name="name"
						className="form-control form-control-lg"
						id="name"
						placeholder="Your Name"
						/>
						</div>

					</div>

				</div>

					{/* Email of the user */}
					<div 
					className="form-group hidden"
					>
						<div 
						className="row"
						>
							<div 
							className="col-12 col-sm-12 col-md-6 mx-auto"
							>
								<input
								type="email"
								name="_replyto"
								className="form-control form-control-lg"
								id="exampleFormControlInput1"
								placeholder="Your Email"
								/>

							</div>

						</div>

					</div>

					{/* Message from the user */}
					<div 
					className="form-group hiddenRight"
					>
						<div 
						className="row"
						>
							<div 
							className="col-12 col-sm-12 col-md-6 mx-auto"
							>
								<textarea
								name="message"
								className="form-control form-control-lg"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Leave a message..."
								/>
							</div>

						</div>

					</div>

					{/* A submit button to send the form */}
					<div 
					className="row text-md-left text-sm-center"
					>
						<div 
					 	className="col-12 col-sm-12 col-md-6 mx-auto"
						>
							<div 
							className={this.props.fadeInRight}
							>
							<button
							id="button-contact"
							type="submit"
							value="Send"
							className="btn btn-primary mb-2 hidden">
								Submit
							</button>

							</div>

						</div>

					</div>

				</form>

			</div>

		);
	}
}

// Array of propTypes to access them
Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	shake: PropTypes.string
};
