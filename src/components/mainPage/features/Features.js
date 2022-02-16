import React from 'react';
import LeadbackIcon from '../../../images/icons/Leadback-features-icon';
import { HashLink as Link } from 'react-router-hash-link';

const Features = () => {
  return (
    <section className='features-wrapper'>
      <div className='features'>
        <div className='features__title'>Профессиональная лидогенерация <br className='features__br'/> ProfLead</div>
        <div className='features__container'>
          <Link to='#leadback' className='feature-item' >
            <LeadbackIcon className='feature-item__icon'/>
            <div className='feature-item__title'>Leadback</div>
            <div className='feature-item__text'>ваши клиенты всегда с вами</div>
          </Link>
        extracted
        </div>
      </div>
    </section>
  ) 
};

export default Features;
