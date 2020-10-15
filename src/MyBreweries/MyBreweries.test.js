import React from 'react';
import ReactDOM from 'react-dom';
import MyBreweries from './MyBreweries';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyBreweries />, div);
    ReactDOM.unmountComponentAtNode(div);
});