import React from 'react'


export const Login = props => {
    return (
        <div>
            <form onSubmit={props.login}>
                <input 
                    type='text'
                    name='name'
                    value='Username'
                    onChange={props.search}
                />
                <input
                    type='text'
                    name='name'
                    value='Password'
                    onChange={props.search}
                />
                <input
                    type='submit'
                    value='Login'
                />
            </form>
        </div>
    )
}
