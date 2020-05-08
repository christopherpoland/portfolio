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
                 <Project direction="rtl" image={ "https://cpoland.s3.us-east-2.amazonaws.com/rsz_screen_shot_2020-05-08_at_40629_pm.jpg" } title="Spinndle" language="Django, PostgreSQL, React, Redux, npm, Git" live= "https://spinndle.com/" description="An online education platform for self guided, interactive learning. Worked as the sole backend developer using Django and PostgreSQL and worked on the React/Redux Frontend as well. "/>
                 <Project direction="ltr" image={ "https://cpoland.s3.us-east-2.amazonaws.com/skill-mockup+(1).png" } title="SkillEd" language="React, Javascript, Flask, PostgreSQL, Heroku, Webpack, CSS3, HTML5" live= "https://www.skilleducation.ca" description="An online platform matching hospitality students with industry professionals and instructors. Partnered with local schools but scalable to reach larger audiences."/>
                 <Project direction="rtl" end="flex-end" image={ "https://cpoland.s3.us-east-2.amazonaws.com/penspeanuts-mockup-min.png" } title="Pens and Peanuts" language="Vanilla Javascript, Flask, PostgreSQL, Heroku, AWS S3, Webpack, CSS3, HTML5" git= "https://github.com/christopherpoland/pens-peanuts" live= "http://www.pensandpeanuts.ca" description="Full stack self sustaining REST blog with authorization, posting and comments, all managed by a postgreSQL database."/>
                 <Project direction="ltr" image={ "https://cpoland.s3.us-east-2.amazonaws.com/cribbage-mockup+16-59-45-731.png" } title="Cribbage Counter" language="React, Javascript, CSS3, HTML5" git= "https://github.com/christopherpoland/React-Cribbage-Counter" live= "https://christopherpoland.github.io/React-Cribbage-Counter/" description="A React app that counts the points of a cribbage hand in a user friendly way, allowing modification during and after scoring."/>
               </div>
             </div>
             <Contact />
           </div>

       )
    }
}
