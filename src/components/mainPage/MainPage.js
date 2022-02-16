import React from 'react';
import Header from './header/Header';
import SpecialCaptureArea from './specialCaptureArea/SpecialCaptureArea';
import Features from './features/Features';
import Action from './action/Action';
import FAQ from './faq/FAQ';
import Details from './details/Details';
import Footer from './footer/Footer';

const MainPage = () => {

  return (
    <div className='main-page'>
      <Header/>
      <main className='main'>
        <SpecialCaptureArea/>
        <Features/>
        <Action/>
        <Details/>
        <FAQ/>
      </main>
      <Footer/>
    </div>
  );
};

export default MainPage;