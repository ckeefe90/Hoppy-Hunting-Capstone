import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from './UserContext';

export default function SignIn(props) {
    const userContext = useContext(UserContext)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        const { email, password } = e.target
        const user = { email: email.value, password: password.value }
        userContext.setUser(user, () => history.push('/MyBreweries'))
    }

    return (<>
        <div className='SignIn__form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Please sign in:</h2>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input name='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='password' required />
                </div>
                <button type='submit'>Login</button>
                <p>Don't have an account? <Link to='/SignUp'>Sign up</Link></p>
            </form>
        </div>
    </>)
}