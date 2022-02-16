import React from 'react';
import Accordion from './accordion/Accordion';

const FAQ = () => {

  return (
    <section className='faq-wrapper'>
      <div className="faq">
        <div className='faq__title'>Ответы на вопросы</div>
        <Accordion>
          <div label="Где можно посмотреть документацию по виджету?">
            <p>
              Вы можете найти ее в личном кабинете в разделе "документация".
            </p>
          </div>
          extracted
        </Accordion>
      </div>
    </section>
  )
  
};

export default FAQ;