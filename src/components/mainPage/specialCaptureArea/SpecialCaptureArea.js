import React from 'react';
import LeadsList from './leadsList/LeadsList';
import Logo from './logo/Logo';
import Balance from './balance/Balance';
import Chart from './chart/Chart';
import Widget from './widget/Widget';

const SpecialCaptureArea = () => {

  return (
    <section className='special-capture-area'>
        <LeadsList/>
        <Logo/>
        <Balance/>
        <Chart/>
        <Widget/>
    </section>
  );
};

export default SpecialCaptureArea;