import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import UserContext from './UserContext';

export default function Header(props) {
    const userContext = useContext(UserContext)
    const history = useHistory()

    function handleLogOut() {
        userContext.setUser(null, () => history.push('/'))
    }

    return (
        <header>
            <nav>
                <NavLink to='/'>Hoppy Hunting</NavLink>
                {userContext.user && <>
                    <NavLink to='/MyBreweries'>My Breweries</NavLink>
                    <button onClick={handleLogOut}>Log Out</button>
                </>}
                {!userContext.user && <>
                    <button type='button' onClick={() => history.push("/SignUp")}>Sign Up</button>
                    <button type='button' onClick={() => history.push("/SignIn")}>Sign In</button>
                </>}
            </nav>
            <h2>Save &amp; rate breweries!</h2>
        </header>
    )
}
