import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import HoppyError from './HoppyError';
import AppSwitch from './AppSwitch';
// import config from './config';
import BreweryContext from './BreweryContext/BreweryContext';
import Header from './Header/Header';
import Footer from './Footer';
import UserContext from './UserContext';


class App extends Component {
  state = {
    breweries: [],
    error: null,
  };

  setBreweries = breweries => {
    this.setState({
      breweries,
      error: null,
    })
  }

  addBrewery = (brewery, cb) => {
    this.setState({
      breweries: [...this.state.breweries, { ...brewery, id: uuid() }],
    }, cb)
  }

  updateBrewery = updatedBrewery => {
    this.setState({
      breweries: this.state.breweries.map(b =>
        (b.id !== updatedBrewery.id) ? b : updatedBrewery)
    })
  }

  deleteBrewery = breweryId => {
    const newBreweries = this.state.breweries.filter(b =>
      b.id !== breweryId
    )
    this.setState({ breweries: newBreweries })
  }

  componentDidMount() {
    // fetch(config.API_ENDPOINT, {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json',
    //     'Authorization': `Bearer ${config.API_KEY}`
    //   }
    // })
    //   .then(res => {
    //     if (!res.ok) {
    //       throw new Error(res.status)
    //     }
    //     return res.json()
    //   })
    //   .then(this.setBreweries)
    //   .catch(error => this.setState({ error }))
  }

  render() {
    const userContextValue = {
      user: this.state.user,
      setUser: (user, cb) => this.setState({ user }, cb),
      addUser: (user, cb) => this.setState({ user }, cb)
    }
    const breweryContextValue = {
      breweries: this.state.breweries,
      addBrewery: this.addBrewery,
      updateBrewery: this.updateBrewery,
      deleteBrewery: this.deleteBrewery,
    }

    return (
      <div className="App">
        <HoppyError>
          <UserContext.Provider value={userContextValue}>
            <Header />
            <main>
              <BreweryContext.Provider value={breweryContextValue}>
                <AppSwitch />
              </BreweryContext.Provider>
            </main>
            <Footer />
          </UserContext.Provider>
        </HoppyError>
      </div>
    )
  }
}

export default withRouter(App);