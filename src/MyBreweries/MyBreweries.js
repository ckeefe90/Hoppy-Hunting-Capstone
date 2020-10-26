import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Brewery from '../Brewery/Brewery';
import BreweryContext from '../BreweryContext/BreweryContext';
import iLoveBeer from '../Images/i-love-beer.png';
import './MyBreweries.css';

export default function MyBreweries() {
    const breweryContext = useContext(BreweryContext)
    const history = useHistory()

    function handleDeleteBrewery(breweryId) {
        breweryContext.deleteBrewery(breweryId)
    }

    return (
        <>
            <img src={iLoveBeer} alt='I love beer' className='iLoveBeer' />
            <h2>My Brewtiful List</h2>

            <p className='myBreweryInfo'>Save breweries that you want to try.
                <br />
            Come back and rate them after you try them.
            <br />
                <span className='deleteNotice'>
                    Please delete wisely! Once it's deleted that cannot be undone.
            </span>
                <br />
            You can always re-add the brewery at any time though.</p>
            <section id='myBreweries'>
                {breweryContext.breweries.map(brewery =>
                    <Brewery
                        {...brewery}
                        key={brewery.id}
                        delete={handleDeleteBrewery}
                    />
                )}
            </section>
            <button
                id='addBrewery'
                type='button'
                onClick={() => history.push('/AddBrewery')}
            >
                Add Brewery
            </button>
        </>
    )
}
