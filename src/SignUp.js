import React, { Component } from 'react';

export default class SignUp extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const { fullName, email, password, confirmPassword } = e.target
        const user = { name: fullName.value, email: email.value, password: password.value, confirmPassword: confirmPassword.value }
        this.context.addUser(user)
    }

    render() {
        return (<>
            <div className='SignUp__form'>
                <form onSubmit={this.handleSubmit}>
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
                        <input name='password' id='password' required />
                    </div>
                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input name='confirmPassword' id='confirmPassword' required />
                    </div>
                    <button type='submit'>Sign-up!</button>
                    <p>Already have an account?</p>
                </form>
            </div>
        </>)
    }
}