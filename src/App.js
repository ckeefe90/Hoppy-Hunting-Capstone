import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HoppyError from './HoppyError';
import config from './config';
import BreweryContext from './BreweryContext/BreweryContext';
import Header from './Header/Header';
import Footer from './Footer';
import UserContext from './UserContext';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddBrewery from './AddBrewery/AddBrewery';
import MyBreweries from './MyBreweries/MyBreweries';


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
            return res.json()
          } else
            throw new Error('Username or password does not match')
        })
        .then(token => {
          localStorage.setItem('user', token)
          this.setState({ user: token }, () => this.getBreweries().then(cb))
        })
  }

  logOut = () => {
    localStorage.removeItem('user')
    this.setState({ breweries: [], user: null }, () => this.props.history.push('/'))
  }

  signup = (user, cb) => {
    console.log('config.API_ENDPOINT', config.API_ENDPOINT)
    return fetch(config.API_ENDPOINT + "/signup", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else
          throw new Error('Unable to create new account')
      })
      .then(token => {
        localStorage.setItem('user', token)
        this.setState({ user: token }, () => this.getBreweries().then(cb))
      })
  }

  getBreweries = () => {
    return fetch(config.API_ENDPOINT + "/breweries", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.state.user}`
      },
    })
      .then(async res => {
        if (res.ok) {
          return res.json()
        } else if (res.status === 401) {
          localStorage.removeItem('user')
          throw new Error('Unauthorized')
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
        'Authorization': `Bearer ${this.state.user}`
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
        'Authorization': `Bearer ${this.state.user}`
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
            (b.id !== id) ? b : { ...b, ...updatedBrewery })
        })
      })
  }

  deleteBrewery = breweryId => {
    return fetch(`${config.API_ENDPOINT}/breweries/${breweryId}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.state.user}`
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
    const user = localStorage.getItem('user')
    if (user) {
      this.setState({ user }, this.getBreweries)
    }
  }

  render() {
    const userContextValue = {
      user: this.state.user,
      setUser: this.login,
      addUser: this.signup,
      logOut: this.logOut
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
                <Switch>
                  <Route exact path='/' render={props => <LandingPage />} />
                  <Route path='/SignUp' render={props => <SignUp />} />
                  <Route path='/SignIn' render={props => <SignIn />} />
                  <Route path='/AddBrewery' render={props => <AddBrewery />} />
                  <Route path='/MyBreweries' render={props => <MyBreweries />} />
                </Switch>
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