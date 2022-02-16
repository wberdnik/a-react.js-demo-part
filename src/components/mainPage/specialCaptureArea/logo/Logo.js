import React from 'react';
import CloudIconLogo from '../../../../images/logo/Cloud-icon-logo';
import HurricaneIconLogo from '../../../../images/logo/Hurricane-icon2-logo';

const Logo = () => {
  return (
    <div className='logo'>
      <CloudIconLogo className='logo__cloud-icon'/>
      <CloudIconLogo className='logo__cloud-icon'/>
      <CloudIconLogo className='logo__cloud-icon'/>
      <HurricaneIconLogo className='logo__hurricane-icon'/>
    </div>
  )
};

export default Logo;