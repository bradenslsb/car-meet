import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="nav-header">
        <div className="right-side-logo">
        </div>
        <div className="left-side-login">
          <h2>{this.name}</h2>
        </div>
      </div>
    )
  }
}