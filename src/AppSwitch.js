import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AddBrewery from './AddBrewery/AddBrewery';
import LandingPage from './LandingPage/LandingPage';
import MyBreweries from './MyBreweries/MyBreweries';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AppSwitch() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' render={props => <LandingPage />} />
                <Route path='/SignUp' render={props => <SignUp />} />
                <Route path='/SignIn' render={props => <SignIn />} />
                <Route path='/AddBrewery' render={props => <AddBrewery />} />
                <Route path='/MyBreweries' render={props => <MyBreweries />} />
            </Switch>
        </Router>
    )
}