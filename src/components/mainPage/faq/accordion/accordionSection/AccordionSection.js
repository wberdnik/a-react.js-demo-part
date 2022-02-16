import React from 'react';
import PlusIcon from '../../../../../images/icons/Plus-icon';

const AccordionSection = ({ isOpen, label, onClick, children }) => {
  const onClick2 = () => {
    onClick(label);
  };

  const openIcon = () => isOpen ? 'accordion-section__icon_open' : '';
  const openAnswer = () => isOpen ? 'accordion-section__answer_open' : '';

  return (
    <div className='accordion-section'>
      <div className='accordion-section__question' onClick={onClick2}>
        <div className='accordion-section__question-text'>{label}</div>
        <PlusIcon className={`accordion-section__icon ${openIcon()}`}/>
      </div>
      {isOpen && (
        <div className={`accordion-section__answer ${openAnswer()}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;