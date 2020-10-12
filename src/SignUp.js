import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from './UserContext';

export default function SignUp() {
    const userContext = useContext(UserContext)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        const { fullName, email, password, confirmPassword } = e.target
        const user = { name: fullName.value, email: email.value, password: password.value, confirmPassword: confirmPassword.value }
        userContext.addUser(user, () => history.push('/MyBreweries'))
    }
    return (<>
        <div className='SignUp__form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Become a Hoppy Hunter!</h2>
                </div>
                <div>
                    <label htmlFor='fullName'>Full Name</label>
                    <input name='fullName' id='fullName' required />
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