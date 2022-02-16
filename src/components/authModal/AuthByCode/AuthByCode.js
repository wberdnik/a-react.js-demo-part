import React from 'react';

const AuthByCode = (props) => {
    const 
        {username, actions} = props,
        submitAction = actions.doLoginCode.bind(actions)

    return (
        <div className='authcode__input-elements'>
          extracted
        </div>
    )
};

export default AuthByCode;
