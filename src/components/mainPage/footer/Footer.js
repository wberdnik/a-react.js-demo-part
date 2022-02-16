import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer' id='footer'>
        <div className='footer__copyright'>
          ProfLead.org &copy; {new Date().getFullYear()}
        </div>
        <div className='footer__documents'>  
          <Link 
            className='footer__terms-of-use-link' 
            to='/terms'>Правила использования</Link>
          <Link 
            className='footer__privacy-policy-link' 
            to='/privacy'>Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
