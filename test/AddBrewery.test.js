import React from 'react';
import ReactDOM from 'react-dom';
import AddBrewery from './AddBrewery';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddBrewery />, div);
    ReactDOM.unmountComponentAtNode(div);
});