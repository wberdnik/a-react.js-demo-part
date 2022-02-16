import React, { useContext } from 'react';
import Context from '../../../../app/context/Context';

const Navbar = () => {

  const context = useContext(Context);
  const { dispatch } = context;

  return (
    <div className='navbar'>
      <span className='navbar__menu-icon' onClick={() => dispatch({type: 'openAuthModal'})}>
      extracted
      </span>
      <button className='navbar__auth-btn' onClick={() => dispatch({type: 'openAuthModal'})}>Войти</button>
    </div>
  );
};
export default Navbar;
