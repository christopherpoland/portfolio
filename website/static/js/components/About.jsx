import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import Contact from './Contact';
export default class About extends Component {
    render() {
       return (
         <div className="home-body-container-wrapper work-container">
           <div className="about-container-wrapper">
             <Navbar classnav="black-nav" classnavoption="black-option" />
             <Header header="ABOUT ME"/>
             <div className="about-container">
               <div className="about-photo-container">
                <img src = {'https://cpoland.s3.us-east-2.amazonaws.com/about-photo.jpg'} className="about-photo"/>
               </div>
               <div className="about-text">
                <p>I am a Full Stack Web Developer based in Vancouver, Canada. I love creating clean back end code and integrating it into an experience for the user that is both functional and aesthetically pleasing. It has been a pleasure learning my current frameworks and I am excited to improve on them, as well as learn more technologies.</p>


               </div>
             </div>
             <Contact />

           </div>
         </div>
       )
    }
}
