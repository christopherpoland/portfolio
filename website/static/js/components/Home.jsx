import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';

export default class Home extends Component {
    render() {
       return (
         <div>
          <div id="homeContainer">
            <div className="dimmer">
            </div>
            <div className="home-body-container-wrapper">
              <div className="home-body-container">
                <Navbar classnav="white-nav" classnavoption="white-option" />
                <div className="home-content-container">
                  <div className="home-content">
                    <div className="total-name">
                      <div className="name top-name">CHRIS</div>
                      <div className="name">POLAND</div>
                      <div className="home-description">Full Stack Web Developer</div>
                    </div>

                    <div className="home-link-container">
                      <div className="hr-container">
                        <hr/>
                      </div>
                      <div className="home-link-wrapper">
                        <Link to="work" className="home-link-text"><div className="home-link">PROJECTS</div></Link>
                        <Link to="about" className="home-link-text"><div className="home-link">ABOUT ME</div></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contact-container">
            <Contact />
          </div>
         </div>
       )
    }
}
