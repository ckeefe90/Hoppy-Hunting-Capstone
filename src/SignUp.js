import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from './UserContext';

export default function SignUp() {
    const userContext = useContext(UserContext)
    const history = useHistory()
    const [error, setError] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        const { email, password, confirmPassword } = e.target
        if (password.value !== confirmPassword.value) {
            setError(new Error('Passwords do not match'))
            return
        }
        const user = { email: email.value, password: password.value }
        userContext.addUser(user, () => history.push('/MyBreweries'))
            .catch(setError)
    }
    return (<>
        <div className='SignUp__form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Become a Hoppy Hunter!</h2>
                    {error && <h3>{error.message}</h3>}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input name='email' id='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input name='password' id='password' type='password' required />
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input name='confirmPassword' id='confirmPassword' type='password' required />
                </div>
                <button type='submit'>Sign-up!</button>
                <p>Already have an account? <Link to='/SignIn'>Sign in</Link></p>
            </form>
        </div>
    </>)
}