import React, { Component } from 'react';

export default class AddBrewery extends Component {
    render() {
        return (
            <div className='addBrewery'>
                <form>
                    <div>
                        <h2>Add a brewery!</h2>
                    </div>
                    <div>
                        <label htmlFor='breweryName'>Brewery Name</label>
                        <input name='breweryName' id='breweryName' required />
                    </div>
                    <div>
                        <label htmlFor='breweryAddress'>Brewery Address</label>
                        <input name='breweryAddress' id='breweryAddress' required />
                    </div>
                    <div>
                        <label htmlFor='comments'>Comments</label>
                        <input name='comments' id='comments' required />
                    </div>
                    <button type='submit'>Add Brewery!</button>
                </form>
            </div>
        )
    }
}