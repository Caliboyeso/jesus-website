import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import avengers from "../img/avengers.png";
import superArena from "../img/super-arena.png";
import trivia from "../img/trivia.png";
import train from "../img/train.png";
import giphy from "../img/giphy.gif";
import chuyRestaurant from "../img/chuy-restaurant.png";
import celebrityMatch from "../img/celebrity-match.png";
import clickyGame from "../img/rick-and-morty.png";
import iReady from "../img/iready.png";
import bookKeeper from "../img/book-keeper.png";
import mongoScraper from "../img/mongo-scraper.png";
import drLopez from "../img/dr-lopez.png";

// Exports projects to React.Component in index.js
export default class Projects extends React.Component {

  render() {

    return (

      <React.Fragment>

        {/* Div that contains all the project cards */}
        <div 
        id="my-projects" 
        className="container-fluid bg-dark mt-5"
        >

            {/* The title of projects section page */}
            <h1
              id="project-section-title"
              className={"text-center " + this.props.fadeInRight}
            >
              Projects
            </h1>

        {/* Row 1 of project cards (Avengers Word Guess, Super Arena, Disney Trivia, Train Scheduler) */}
        <div 
          id="cards-row1"
          className={"text-center " + this.props.fadeInLeft}>

          {/* Row 1; Card 1 */}
				  {/* Avengers Word Guess card */}
          <Card 
          id="card-avengers"
          >

          {/* Image of card */}
          <Card.Img 
          id="card-img-avengers" 
          src={avengers} 
          />

          {/* Body of card */}
          <Card.Body 
          id="card-body-avengers"
          >

            {/* Title of card */}
            <Card.Title 
            id="card-title-avengers"
            >
              Avengers Word Guess
            </Card.Title>

            {/* Text for card */}
            <Card.Text 
            id="card-text-avengers">
              A word guess game were you try to guess the random avenger to stop 
              Thanos. Created with HTML5, CSS3, JavaScript, and Bootstrap.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button 
            id="button-avengers" 
            href="https://caliboyeso.github.io/avengers-word-guess/" 
            target="_blank" variant="primary"
            >
              Visit
            </Button>

          </Card.Body>
          
        </Card>

      {/* Row 1; Card 2 */}
		  {/* Super Arena card */}
		  <Card id="card-super">

          {/* Image for card */}
          <Card.Img 
          id="card-img-super" 
          src={superArena} 
          />

          {/* Body for card */}
          <Card.Body 
          id="card-body-super"
          >

            {/* Title for card */}
            <Card.Title 
            id="card-title-super"
            >
              Super Arena
            </Card.Title>

            {/* Text for card */}
            <Card.Text 
            id="card-text-super">
              A battle arena where you pick one of the four characters and battle 
              the other 3 one at a time. Created with HTML5, CSS3, JavaScript, and 
              jQuery.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button 
            id="button-super"
            href="https://caliboyeso.github.io/super-arena/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

      {/* Row 1; Card 3 */}
		  {/* Disney Trivia card */}
      <Card 
      id="card-trivia"
      >

          {/* Image for card */}
          <Card.Img 
          id="card-img-trivia" 
          src={trivia} 
          />

          {/* Body for card */}
          <Card.Body 
          id="card-body-trivia"
          >

            {/* Title for card */}
            <Card.Title 
            id="card-title-trivia"
            >
              Disney Trivia
            </Card.Title>

            {/* Text for card */}
            <Card.Text 
            id="card-text-trivia">
              A Disney trivia game with a total of 10 questions with the results at 
              the end. Created with HTML5, CSS3, JavaScript, and jQuery.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button 
            id="button-trivia" 
            href="https://caliboyeso.github.io/disney_trivia/" 
            target="_blank"
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

      {/* Row 1; Card 4 */}
		  {/* Train Scheduler card */}
      <Card 
      id="card-train"
      >

          {/* Image for card */}
          <Card.Img 
          id="card-img-train" 
          src={train} 
          />

          {/* Body for card */}
          <Card.Body 
          id="card-body-train"
          >

            {/* Title for card */}
            <Card.Title 
            id="card-title-train"
            >
              Train Scheduler
            </Card.Title>

            {/* Text for card */}
            <Card.Text 
            id="card-text-train">
              A train app where you can plan a trip and give the amount of duration 
              of the ride. Created with HTML5, CSS3, JavaScript, jQuery, Bootstrap, 
              and Firebase.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button 
            id="button-train" 
            href="https://caliboyeso.github.io/train-scheduler/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

      </div>


      {/* Row 2 of project cards (Giftastic, Chuy's Restaurant, My Celebrity Match, Clicky Game) */}
      <div 
          id="cards-row1"
          className={"text-center " + this.props.fadeInRight}>

    {/* Row 2; Card 1 */}
		{/* Giftastic card */}
    <Card 
    id="card-giftastic"
    >

          {/* Image for card */}
          <Card.Img 
          id="card-img-giftastic" 
          src={giphy} 
          />

          {/* Body for card */}
          <Card.Body 
          id="card-body-giftastic"
          >

            {/* Title for card */}
            <Card.Title 
            id="card-title-giftastic"
            >
              Giftastic
            </Card.Title>

            {/* Text for card */}
            <Card.Text 
            id="card-text-giftastic">
              A animal giphy app where users can search for any 
              type of animal with 
              all kinds of different gifs. Created with HTML5, CSS3, 
              JavaScript, jQuery, AJAX, and Giphy API.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button 
            id="button-giftastic" 
            href="https://caliboyeso.github.io/giftastic/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

    {/* Row 2; Card 2 */}
		{/* Chuy's Restaurant card */}
    <Card 
      id="card-restaurant"
      >

          {/* Image for card */}
          <Card.Img 
          id="card-img-restaurant"  
          src={chuyRestaurant} 
          />

          {/* Body for card */}
          <Card.Body 
          id="card-body-restaurant"
          >

            {/* Title for card */}
            <Card.Title
            id="card-title-restaurant"
            >
              Chuy's Restaurant
            </Card.Title>

            {/* Text for card */}
            <Card.Text
            id="card-text-restaurant"
            >
              A restaurant app were users can reserve seats 
              which includes a current reservation and a waiting list. 
              Created with HTML5, JavaScript, jQuery, Bootstrap, Node.js, 
              Express.js, and Postman.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button 
            id="button-restaurant"
            href="https://chuys-restaurant.herokuapp.com/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

    {/* Row 2; Card 3 */}
		{/* Celebrity Match card */}
    <Card 
    id="card-match"
    >

          {/* Image for card */}
          <Card.Img 
          id="card-img-match" 
          src={celebrityMatch} 
          />

          {/* Body for card */}
          <Card.Body style={{ background: "black" }}>

            {/* Title for card */}
            <Card.Title
            id="card-title-match"
            >
              My Celebrity Match
            </Card.Title>

            {/* Text for card */}
            <Card.Text
            id="card-text-match"
            >
              A survey where you are matched with a celebrity depending on 
              answers given. Created with HTML5, JavaScript, jQuery, Bootstrap, 
              Node.js, Express.js, and Postman for the API's.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button 
            id="button-match"
            href="https://my-celebrity-match.herokuapp.com/" 
            target="_blank" 
            v
            ariant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

    {/* Row 2; Card 4 */}
		{/* Clicky Game card */}
    <Card
    id="card-clicky"
    >

          {/* Image for card */}
          <Card.Img
          id="card-img-clicky"
          src={clickyGame} 
          />

          {/* Body for card */}
          <Card.Body
          id="card-body-clicky"
          >

            {/* Title for card */}
            <Card.Title
            id="card-title-clicky"
            >
              Clicky Game
            </Card.Title>

            {/* Text for card */}
            <Card.Text
            id="card-text-clicky"
            >
              A game where you try to click as many characters as you can until you 
              hit the wrong character, but you won't know which one is the wrong one. 
              Created with HTML5, CSS3, JavaScript, AJAX, and React.js.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button
            id="button-clicky" 
            href="https://react-rick-morty-game.herokuapp.com/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

        </div>
    
    {/* Row 3 of project cards (iReady, Dr. Lopez, Book Keeper, Mongo Scraper) */}
    <div 
    id="cards-row3"
    className={"text-center " + this.props.fadeInLeft}>

    {/* Row 3; Card 1 */}
		{/* iReady card */}
    <Card
    id="card-iready"
    >

        {/* Image for card */}
          <Card.Img
          id="card-img-iready" 
          src={iReady} 
          />

          {/* Body for card */}
          <Card.Body
          id="card-body-iready" 
          >

            {/* Title for card */}
            <Card.Title
            id="card-title-iready"
            >
              iReady
            </Card.Title>

            {/* Text for card */}
            <Card.Text
            id="card-text-iready"
            >
              iReady is a react todo app where users can add a list of todos and 
              also remove them. Created with HTML5, CSS, JavaScript, and React.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button
            id="button-iready"
            href="https://iready-app.herokuapp.com/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

    {/* Row 3; Card 2 */}
		{/* Dr. Lopez card */}
    <Card
    id="card-drLopez" 
    >

          {/* Image for card */}
          <Card.Img
          src={drLopez} height="153" 
          />

          {/* Body for card */}
          <Card.Body
          id="card-body-drLopez"
          >

            {/* Title for card */}
            <Card.Title
            id="card-title-drLopez"
            >
              Dr. Lopez
            </Card.Title>

            {/* Text for card */}
            <Card.Text
            id="card-text-drLopez"
            >
              Schedule an appointment with Dr. Lopez by entering your information. 
              Created with HTML5, CSS3, JavaScript, React.js, Node.js Express.js, 
              MongoDB, and Postman for the API's. 
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button
            id="button-drLopez" 
            href="https://dr-lopez-mern.herokuapp.com/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

    {/* Row 3; Card 3 */}
		{/* Book Keeper card */}
    <Card
    id="card-book"
    >

          {/* Image for card */}
          <Card.Img
          id="card-img-book"
          src={bookKeeper}
          />

          {/* Body for card */}
          <Card.Body
          id="card-body-book"
          >

            {/* Title for card */}
            <Card.Title
            id="card-title-book"
            >
              Book Keeper
            </Card.Title>

            {/* Text for card */}
            <Card.Text
            id="card-text-book"
            >
              Feel like reading? Use Book Keeper to look for all kinds of books 
              online. Created with HTML5, CSS3, JavaScript, AJAX, Bootstrap, 
              React.js, Node.js, Express.js, MongoDb, and Postman for the API's.
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button
            id="button-book" 
            href="https://react-ibook-finder.herokuapp.com/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

    {/* Row 3; Card 4 */}
		{/* Mongo Scraper */}
    <Card
    id="card-mongo"
    >

        {/* Image for card */}
          <Card.Img
          id="card-img-mongo"
          src={mongoScraper}
          />

          {/* Body for card */}
          <Card.Body
          id="card-body-mongo"
          >

            {/* Title for card */}
            <Card.Title
            id="card-title-mongo"
            >
              Mongo Scraper
            </Card.Title>

            {/* Text for card */}
            <Card.Text
            id="card-text-mongo"
            >
              Use Mongo Scraper to scrape the latest news around your location to 
              stay updated! Created with CSS3, JavaScript, Handlebars, React.js, 
              Node.js, Express.js, MongoDB, and Postman for the API's.  
            </Card.Text>

            {/* A link that opens another tab and takes the user to the website */}
            <Button
            id="button-mongo" 
            href="https://mongo-scraper-times.herokuapp.com/" 
            target="_blank" 
            variant="primary"
            >
              Visit
            </Button>

          </Card.Body>

        </Card>

        </div>

      </div>

      </React.Fragment>
    );
  }
}

// Array of propTypes to access them
Projects.propTypes = {
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
};
