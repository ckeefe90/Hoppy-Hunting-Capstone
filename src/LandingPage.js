import React, { Component } from 'react';

export default class LandingPage extends Component {
    render() {
        return (
            <div className='landingPage'>
                <section>
                    <div className='descBox'>
                        <h3>Search for breweries</h3>
                    </div>
                    <p>[<em>placeholder for screenshot of brewery</em>]</p>
                    <p>Sick of going to the same places? Want to try something new? Let us help you find the right brewery based off some search criteria you select. You can search by zip code or the type of beer that you're looking for.</p>
                </section>
                <section>
                    <div className='descBox'>
                        <h3>Save breweries that you want to visit</h3>
                    </div>
                    <p>[<em>placeholder for screenshot of brewery search</em>]</p>
                    <p>Did too many results sound good? Save the breweries so you can keep track of the ones that you want to try.</p>
                </section>
                <section>
                    <div className='descBox'>
                        <h3>Come back and rate breweries that you've visited</h3>
                    </div>
                    <p>[<em>placeholder for screenshot of beer</em>]</p>
                    <p>Was the brewery better than expected or you want to track which ones you didn't like? Rate how your visit went.</p>
                </section>
                <section>
                    <div className='welcomeBox'>
                        <h3>Let's start hunting</h3>
                    </div>
                    <button type='submit'>Sign Up</button>
                    <button type='submit'>Sign In</button>
                </section>
            </div>
        )
    }
}