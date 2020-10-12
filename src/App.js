import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header><Header /></header>
        <main>
          <LandingPage />
        </main>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);