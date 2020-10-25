import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { brokenBeer } from './Images/broken-beer.jpg'

export default class HoppyError extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <>
                <h2>Uh, oh. Something went wrong.</h2>
                <img width='30%' src={brokenBeer} alt='broken beer' />
            </>
        }
        return this.props.children;
    }
}

HoppyError.propTypes = { children: PropTypes.node.isRequired }