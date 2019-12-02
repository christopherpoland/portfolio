import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Project extends Component {
    render() {
       return (
          <div className="project-container" style={{direction: this.props.direction}}>
            <div className="project-photo-container">
              <img src={this.props.image} className="work-photo" />
            </div>
            <div className="project-text">
              <div className="work-title">{this.props.title}</div>
              <div className="work-language">{this.props.language}</div>
              <div className="work-description">{this.props.description}</div>
              <div className="work-link-wrapper" style={{direction: "ltr", justifyContent: this.props.end }}>
                { this.props.git ? <div className="work-link-container"><a className="work-link" href={this.props.git}>Github</a></div> : null }
                <div className="work-link-container"><a className="work-link" href={this.props.live}>Website</a></div>
              </div>
            </div>
          </div>
       )
    }
}
