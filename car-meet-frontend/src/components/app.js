import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import GoogleLogin from "react-google-login"

import Homepage from "./hompage/homepage"


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSignedIn: false,
      name: ""
    }
  }

  responseGoogle(response) {
    this.setState({ isSignedIn: true })
    console.log(response)
  }



  
  render() {
    return (
      <div className='app'>
        <GoogleLogin
          clientId="389761007689-ei6bmnb2ocagp07b7c162bb6vjfsbv7k.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          isSignedIn={true}
          onClick={this.responseGoogle()}
        />
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage name={this.name}/>
            </Route>
            <Route></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
