import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from "./Project.jsx";
import Navbar from './Navbar';
import Header from './Header';
import Contact from './Contact';

export default class Work extends Component {
    render() {
       return (

           <div className="home-body-container-wrapper work-container">
             <div className="work-body-container">
               <Navbar classnav="black-nav" classnavoption="black-option" />
               <Header header="MY WORK"/>
               <div className="work-container">
                 <Project direction="ltr" image={ "https://cpoland.s3.us-east-2.amazonaws.com/skill-mockup%20%281%29%20%281%29.jpg" } title="SkillEd" language="React, Javascript, Flask, PostgreSQL, Heroku, Webpack, CSS3, HTML5" live= "https://www.skilleducation.ca" description="An online platform matching hospitality students with industry professionals and instructors. Partnered with local schools but scalable to reach larger audiences."/>
                 <Project direction="rtl" end="flex-end" image={ "https://cpoland.s3.us-east-2.amazonaws.com/penspeanuts-mockup-min.jpg" } title="Pens and Peanuts" language="Vanilla Javascript, Flask, PostgreSQL, Heroku, AWS S3, Webpack, CSS3, HTML5" git= "https://github.com/christopherpoland/pens-peanuts" live= "http://www.pensandpeanuts.ca" description="Full stack self sustaining REST blog with authorization, posting and comments, all managed by a postgreSQL database."/>
                 <Project direction="ltr" image={ "https://cpoland.s3.us-east-2.amazonaws.com/cribbage-mockup.jpg" } title="Cribbage Counter" language="React, Javascript, CSS3, HTML5" git= "https://github.com/christopherpoland/React-Cribbage-Counter" live= "https://christopherpoland.github.io/React-Cribbage-Counter/" description="A React app that counts the points of a cribbage hand in a user friendly way, allowing modification during and after scoring."/>
               </div>
             </div>
             <Contact />
           </div>

       )
    }
}
