import React from 'react';
import flight from '../Images/flight.jpg'
import topViewFlight from '../Images/top-view-flight.jpg'
import beerTaps from '../Images/beer-taps.jpg'

export default function LandingPage(props) {
    return (
        <div className='landingPage'>
            {/* <section>
                <div className='descBox'>
                    <h3>Searching for breweries</h3>
                </div>
                <p>[<em>placeholder for screenshot of brewery</em>]</p>
                <p>Sick of going to the same places? Want to try something new? Let us help you find the right brewery based off some search criteria you select. You can search by zip code or the type of beer that you're looking for.</p>
            </section> */}

            <h2>Save &amp; rate breweries!</h2>
            <section>
                <img width='50%' src={beerTaps} alt='beer taps' />
                <div className='descBox'>
                    <h3>Save breweries that you want to visit</h3>
                </div>

                <p>Did too many results sound good? Save the breweries so you can keep track of the ones that you want to try.</p>
            </section>
            <section>
                <img width='50%' src={flight} alt='flight' />
                <div className='descBox'>
                    <h3>Come back and rate breweries that you've visited</h3>
                </div>
                <p>Was the brewery better than expected or you want to track which ones you didn't like? Rate how your visit went by updating the comments and rating.</p>
            </section>
            <section>
                <img width='50%' src={topViewFlight} alt='top view flight' />
                <div className='welcomeBox'>
                    <h3>Let's start hunting</h3>
                </div>
            </section>
        </div>
    )
}
