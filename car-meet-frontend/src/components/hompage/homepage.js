import React, { Component } from 'react'

import NavBar from "./navbar"
import Footer from "./footer"

export default class Homepage extends Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
      <div>
        <NavBar name={this.name} />
        <h1>Homepage</h1>
        <Footer />
      </div>
    )
  }
}
