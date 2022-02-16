import React, { useContext } from 'react';
import Context from '../../../app/context/Context';

const Action = () => {
  
  const context = useContext(Context);
  const { dispatch } = context;

  const handleClick = () => {
    dispatch({type: 'openSignUpAuthModal'});
  }

  return (
    <section className='action-wrapper'>
      <div className='action'>
        <div className='action__title'>Вы приглашены в мир совершенства</div>
        <div className="action__btn-silver">
          <div className="action__btn-red" onClick={handleClick}>
            <div className="action__btn-black">
              <div className="action__btn-text">
                start
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Action;
