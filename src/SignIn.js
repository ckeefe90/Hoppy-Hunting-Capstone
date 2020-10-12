import React, { Component } from 'react';

export default class SignIn extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const { email, password } = e.target
        const user = { email: email.value, password: password.value }
        this.context.login(user)
    }

    render() {
        return (<>
            <div className='SignIn__form'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h2>Please sign in:</h2>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input name='email' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input name='password' />
                    </div>
                    <button type='submit'>Login</button>
                    <p>Don't have an account?</p>
                </form>
            </div>
        </>)
    }
}