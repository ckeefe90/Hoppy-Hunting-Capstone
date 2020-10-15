import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BreweryContext from '../BreweryContext/BreweryContext';

export default function AddBrewery(props) {
    const breweryContext = useContext(BreweryContext)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        const { breweryName, breweryAddress, comments } = e.target
        const newBrewery = {
            name: breweryName.value,
            address: breweryAddress.value,
            comments: comments.value
        }
        breweryContext.addBrewery(newBrewery, () => history.push('/MyBreweries'))
    }

    return (
        <div className='addBrewery'>
            <form onSubmit={handleSubmit}>
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
                    <input name='comments' id='comments' />
                </div>
                <button type='submit'>Add Brewery!</button>
            </form>
        </div>
    )
}
