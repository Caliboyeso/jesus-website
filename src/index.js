import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import './styles/background.scss';
import './styles/about.scss';
import './styles/projects.scss';
import './styles/contact.scss';
import './styles/navbar.scss';
import './styles/footer.scss';
// import "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    {/* Navbar */}
    <Navbar />

    {/* Footer */}
    <Footer />
    
  </React.Fragment>, document.getElementById('root'));


// serviceWorker.unregister();