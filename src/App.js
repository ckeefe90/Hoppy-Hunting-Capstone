import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HoppyError from './HoppyError';
import AppSwitch from './AppSwitch';
import config from './config';
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

  login = (user, cb) => {
    if (!user) {
      this.setState({ user }, cb)
    }
    else
      return fetch(config.API_ENDPOINT + "/login", {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user)
      })
        .then(res => {
          if (res.ok) {
            this.setState({ user }, () => this.getBreweries().then(cb))
          } else
            throw new Error('Username or password does not match')
        })
  }

  signup = (user, cb) => {
    return fetch(config.API_ENDPOINT + "/signup", {
      method: "post",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          this.setState({ user }, cb)
        } else
          throw new Error('Unable to create new account')
      })
  }

  getBreweries = () => {
    return fetch(config.API_ENDPOINT + "/breweries", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Basic ${btoa(this.state.user.email + ':' + this.state.user.password)}`
      },
    })
      .then(async res => {
        if (res.ok) {
          return res.json()
        } else {
          const json = await res.json()
          throw new Error(json.error.message)
        }
      })
      .then(breweries => {
        this.setState({
          breweries,
        })
      })
  }

  addBrewery = (brewery, cb) => {
    return fetch(config.API_ENDPOINT + "/breweries", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Basic ${btoa(this.state.user.email + ':' + this.state.user.password)}`
      },
      body: JSON.stringify(brewery)
    })
      .then(async res => {
        if (res.ok) {
          return res.json()
        } else {
          const json = await res.json()
          throw new Error(json.error.message)
        }
      })
      .then(newBrewery => {
        this.setState({
          breweries: [...this.state.breweries, newBrewery],
        }, cb)
      })
  }

  updateBrewery = (id, updatedBrewery) => {
    return fetch(`${config.API_ENDPOINT}/breweries/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Basic ${btoa(this.state.user.email + ':' + this.state.user.password)}`
      },
      body: JSON.stringify(updatedBrewery)
    })
      .then(async res => {
        if (res.ok) {
          return res
        } else {
          const json = await res.json()
          throw new Error(json.error.message)
        }
      })
      .then(() => {
        this.setState({
          breweries: this.state.breweries.map(b =>
            (b.id !== updatedBrewery.id) ? b : updatedBrewery)
        })
      })
  }

  deleteBrewery = breweryId => {
    return fetch(`${config.API_ENDPOINT}/breweries/${breweryId}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Basic ${btoa(this.state.user.email + ':' + this.state.user.password)}`
      },
    })
      .then(async res => {
        if (res.ok) {
          return res
        } else {
          const json = await res.json()
          throw new Error(json.error.message)
        }
      })
      .then(() => {
        const newBreweries = this.state.breweries.filter(b =>
          b.id !== breweryId
        )
        this.setState({ breweries: newBreweries })
      })
  }

  componentDidMount() {
    if (this.state.user)
      this.getBreweries()
  }

  render() {
    const userContextValue = {
      user: this.state.user,
      setUser: this.login,
      addUser: this.signup
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