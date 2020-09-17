import React from "react";
import jesus from "../img/jesus.png";
import PropTypes from "prop-types";

// Exports projects to React.Component in index.js
export default class About extends React.Component {

  render() {

    return (

      // A div that contains everything in the About section that includes a title, a contact information box, a picture, and a short bio
      <div
        id="about-container"
        className="content-containers container text-center mt-5"
      >

        {/* Title for about section */}
        <h1 
          id="about-title" 
          className={this.props.fadeInLeft}
        >
          About
        </h1>

        {/* A div that contains a title along with my phone number and my email */}
        <div 
          id="contact-box" 
          className={this.props.fadeInRight}>

          {/* Contact Title */}
          <h3 
            id="contact-title"
          >
            Connect with me!
          </h3>

          <hr id="hr" />

          {/* Cell number */}
          <div 
          id="cell"
          >
            (510)363-4975
          </div>

          {/* Link that opens to another tab so the client can send me an email and returns them back to my portfolio once the email has been sent */}
          <a 
          href="mailto:jesus.blopez97@gmail.com"
          id="email"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          >
            Email Me!
          </a>

        </div>

            {/* Portfolio picture */}
            <img
              id="portfolio-picture"
              className={"img-fluid " + this.props.fadeInLeft}
              src={jesus}
              alt="jesus"
            />

            {/* Short bio #1 */}
            <p
              id="bio1"
              className={"mytext pt-3 " + this.props.fadeInRight}
            >
              Hello! I'm Jesus, a software engineer
              located in San Leandro, California.  
            </p>

            {/* Short bio #2 */}
            <p
              id="bio2"
              className={"mytext pt-3 " + this.props.fadeInLeft}
            > 
              A graduate from UC Berkeley coding boot-camp as a Full Stack 
              Web Developer where I also learned about the MERN Stack. 
            </p>

            {/* Short bio #3 */}
            <p
              id="bio3"
              className={"mytext pt-3 " + this.props.fadeInRight}
            >
              I'm passionate about using JavaScript to create awesome 
              user experiences and pixel-perfect responsive 
              websites. I enjoy bringing ideas into reality using code,
              and a team player who is always willing to go the extra mile.
            </p>

      </div>

    );
  }
}

// Array of propTypes to access them
About.propTypes = {
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
};
