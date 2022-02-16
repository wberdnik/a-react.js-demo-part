import React from 'react';

const AuthByPassword = (props) => {
    const {username, actions} = props,
        submitAction = actions.doLoginPassword.bind(actions)

    return (
        <div className='password__input-elements'>
            <div className='login__input-container'>
                <input
                    className='login-with__username'
                    style={{marginTop: 0}}
                    type='text'
                    placeholder='Логин или e-mail или телефон'
                    defaultValue={username}
                    readOnly/>
            </div>
            extracted
            <button className='login-with__enter-btn auth-form__enter-btn' onClick={submitAction}>Войти</button>
        </div>
    )
};

export default AuthByPassword;
