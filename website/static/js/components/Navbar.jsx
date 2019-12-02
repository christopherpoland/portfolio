import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAngellist } from '@fortawesome/free-brands-svg-icons'
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll=this.handleScroll.bind(this);
    this.pageChange=this.pageChange.bind(this);
  }
  handleScroll() {
    var contact = document.getElementById('contact');
    contact.scrollIntoView();
  }
  pageChange(site) {
    window.location = site;
  }

    render() {
       return (
          <div className="navbar-container">
            <div className = "home-navbar">
            <Link to='/' id="navSelf" className={"navbar-option-container " + this.props.classnav}><div className={"navbar-option " + this.props.classnavoption}>CHRIS POLAND</div></Link>
              <Link to='work' className={"navbar-option-container " + this.props.classnav}><div className={"navbar-option " + this.props.classnavoption}>WORK</div></Link>
              <Link to='about' className={"navbar-option-container " + this.props.classnav}><div className={"navbar-option " + this.props.classnavoption}>ABOUT</div></Link>

              <div className={"navbar-option-container " + this.props.classnav} onClick={this.handleScroll}>
                <div className={"navbar-option " + this.props.classnavoption} onClick={this.handleScroll}>CONTACT</div>
              </div>
            </div>
            <div className= "home-social">
              <div className={"navbar-option-container " + this.props.classnav} onClick={() => this.pageChange("https://angel.co/christopher-poland")}>
                <p className={"navbar-option " + this.props.classnavoption}><FontAwesomeIcon icon={faAngellist} size="lg" /></p>
              </div>
              <div className={"navbar-option-container " + this.props.classnav} onClick={() => this.pageChange("https://github.com/christopherpoland")}>
                <p className={"navbar-option " + this.props.classnavoption}><FontAwesomeIcon icon={faGithub} size="lg" /></p>
              </div>
            </div>
          </div>
       )
    }
}
