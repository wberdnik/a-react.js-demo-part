import React from 'react';

export default function Login(props) {

    const {actions, tabItems, loginType} = props,
        loginControlTabs = actions.loginControlTabs.bind(actions),
        loginSubmitButton = actions.loginSubmitButton.bind(actions)

    return (
        <div className='login__content-wrapper'>
extracted
            <button className='login__enter-btn auth-form__enter-btn' onClick={loginSubmitButton}
                    disabled={loginType === 'social'}>
                Войти
            </button>
        </div>
    )
}
