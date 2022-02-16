import React from 'react';
import InputMask from 'react-input-mask';
import BaseValidate from "../../../services/validation/baseValidate";

export default function SignUp(props) {

    const {actions, username} = props,
        submitAction = actions.doSignUp.bind(actions),
        {phoneReg, emailReg} = BaseValidate.regPatt;

    let usernameType = 'username'

    if (username.match(phoneReg)) {
        usernameType = 'phone'
    } else if (username.match(emailReg)) {
        usernameType = 'email'
    }

    return (
        <div className='sign-up__input-elements'>
            <div className='login__input-container'>
                <input
                    className='sign-up__username'
                    type='text'
                    id='sign_username'
                    placeholder='Логин'
                    defaultValue={usernameType === 'username' ? username : ''}
                    autoComplete='off'
                />
            </div>
            extracted
            <button className='sign-up__enter-btn auth-form__enter-btn' onClick={submitAction}>
                Зарегистрироваться
            </button>
        </div>
    )
}
