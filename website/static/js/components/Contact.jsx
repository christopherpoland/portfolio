import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''

    };

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);

  }
  handleChange(event) {
    let nam = event.target.name;
    document.getElementById(nam + "Warning").style.display = "none";
    document.getElementById(event.target.id).classList.remove("red-border")
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  handleSubmit() {
    if (this.state.name == "") {
      document.getElementById("contactName").classList.add("red-border");
      document.getElementById("nameWarning").style.display = "block";
    }
    if (this.state.email == "") {
      document.getElementById("contactEmail").classList.add("red-border");
      document.getElementById("emailWarning").style.display = "block";
    }
    if (this.state.message == "") {
      document.getElementById("contactMessage").classList.add("red-border");
      document.getElementById("messageWarning").style.display = "block";
    }
    var data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    document.getElementById('contactWaiting').style.display = 'block';

    var url = String(window.location).split('/')[0] + '/email';
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status code: ${response.status}`);
        document.getElementById('contactWaiting').style.display = 'none';
        document.getElementById('contactUnsuccessful').style.display = 'block';
        return;
      }
    response.json().then(function(data) {
      console.log(data);
      document.getElementById('contactWaiting').style.display = 'none';
      document.getElementById('contactConfirm').style.display = 'block';
    });
    })
    .catch(function(error) {
      console.log("Fetch error: " + error);
    });

  }
    render() {
       return (
         <div className="contact-wrapper" id="contact">
           <Header header="CONTACT"/>
           <div className="contact-container" id="contactContainer">
             <p className="contact-message" id="contactWaiting" style={{display: "none"}}>Sending message...</p>
             <p className="contact-message" id="contactUnsuccessful" style={{display: "none"}}>Please try again another time.</p>
             <p className="contact-message" id="contactConfirm" style={{display: "none"}}>Message submitted. Thank you!</p>
             <p className="contact-message">Send me a message here or at <a className="contact-email" href="mailto: chris.poland94@gmail.com">chris.poland94@gmail.com</a>.</p>
             <form method="POST" className = "input-form" autoComplete="on" action="/email">
               <input id = "contactName" name="name" placeholder="Name" autoComplete="name" className = "input" value={this.state.name} onChange={this.handleChange}/>
               <p id="nameWarning" className="contact-warning">Please add your name</p>
               <input id = "contactEmail" name="email" placeholder="Email" type="email" autoComplete="email" className = "input" value={this.state.email} onChange={this.handleChange}/>
               <p id="emailWarning" className="contact-warning">Please add your email</p>
               <textarea id = "contactMessage" className="input" name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange}></textarea>
               <p id="messageWarning" className="contact-warning">Please add a message</p>
               <div className="input-submit" onClick = {this.handleSubmit} value="Submit">Submit</div>
             </form>
           </div>
          </div>
       )
    }
}
