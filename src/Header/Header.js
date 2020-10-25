import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import './Header.css';
import beerMug from '../Images/beer-mug.png'

export default function Header(props) {
    const userContext = useContext(UserContext)

    return (
        <header>
            <nav>
                <div className='leftNav'>
                    <Link to='/'>
                        <img src={beerMug} alt='beer mug' className='logo' />
                        Hoppy Hunting
                        </Link>
                    {userContext.user && <Link to='/MyBreweries'>My Breweries</Link>}
                </div>
                <div className='rightNav'>
                    {userContext.user && <Link onClick={userContext.logOut}>Log Out</Link>}
                    {!userContext.user && <>
                        <Link to='/SignUp'>Sign Up</Link>
                        <Link to='SignIn'>Sign In</Link>
                    </>}
                </div>
            </nav>
        </header>
    )
}
