import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddBrewery from './AddBrewery';
import LandingPage from './LandingPage';
import MyBreweries from './MyBreweries';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AppSwitch() {
    return (
        <Switch>
            <Route exact path='/' render={props => <LandingPage />} />
            <Route path='/SignUp' render={props => <SignUp />} />
            <Route path='/SignIn' render={props => <SignIn />} />
            <Route path='/AddBrewery' render={props => <AddBrewery />} />
            <Route path='/MyBreweries' render={props => <MyBreweries />} />
        </Switch>
    )
}