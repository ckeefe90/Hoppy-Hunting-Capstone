import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Brewery from './Brewery';
import BreweryContext from './BreweryContext';

export default function MyBreweries() {
    const breweryContext = useContext(BreweryContext)
    const history = useHistory()

    function handleDeleteBrewery(breweryId) {
        breweryContext.deleteBrewery(breweryId)
    }

    return (
        <div className='myBreweries'>
            <h2>My Brewtiful List</h2>
            <ul>
                {breweryContext.breweries.map(brewery =>
                    <Brewery
                        {...brewery}
                        key={brewery.id}
                        delete={handleDeleteBrewery}
                    />
                )}
            </ul>
            <button
                type='button'
                onClick={() => history.push('/AddBrewery')}
            >
                Add Brewery
            </button>
        </div>
    )
}
