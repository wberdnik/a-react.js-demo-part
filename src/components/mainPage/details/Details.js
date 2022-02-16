import React from 'react';
import LeadBackDetailsIcon from '../../../images/icons/Leadback-details-icon';
import RussiaIcon from '../../../images/icons/Russia-icon';
import TrendDetailsIcon from '../../../images/icons/Trend-details-icon';
import ServerIcon from '../../../images/icons/Server-icon.js';

const Details = () => {

  return (
    <section className='details' id='details'>
      <div className='details-item-wrapper'>
        <div className='details-item' id='leadback'>
          <LeadBackDetailsIcon className='details-item__image'/>
          <div className='details-item__title'>
            Услуга Leadback
          </div>
          <div className='details-item__text'>
          Выберете заявки, которые вам интересны и получайте их на почту
          <br/>
          Вы можете настроить какие заявки продавать, а какие оставлять себе
          </div>
        </div>
      </div>
    extracted
    </section>
  )
};

export default Details;