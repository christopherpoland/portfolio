import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
       return (
         <div className="title-container">
           <div className="header"><b>{this.props.header}</b></div>
           <div className="line" />
         </div>
       )
    }
}
