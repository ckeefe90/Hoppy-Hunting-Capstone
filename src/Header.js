import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1><Link to='/'>Hoppy Hunting</Link></h1>
                <h2>Find, save & rate breweries!</h2>
            </header>
        )
    }
}