import React from 'react';

const LeadItem = ({ leadItem }) => {

  const { phone, title, time, text } = leadItem;

  return (
    <li className='lead-item content-block'>
      <p className='lead-item__phone'>{phone}</p>
      <p className='lead-item__time'>{time}</p>
      <p className='lead-item__title'>{title}</p>
      <p className='lead-item__text'>{text}</p>
    </li>
  )
};

export default LeadItem;