import React, { useState } from 'react';
import AccordionSection from './accordionSection/AccordionSection';

const Accordion = ({ children }) => {

  const openSections = {};
    
  children.forEach(child => {
    if (child.props.isOpen) {
      openSections[child.props.label] = true;
    }
  });
  const [state, setState] = useState({openSections});

  const onClick = label => {
    const isOpen = !!state.openSections[label];
    setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  return (
    <div className='accordion'>
      {children.map(child => (
        <AccordionSection
          isOpen={!!state.openSections[child.props.label]}
          label={child.props.label}
          onClick={onClick}
          key={child.props.label}
        >
          {child.props.children}
        </AccordionSection>
      ))}
    </div>
  );
};

export default Accordion;