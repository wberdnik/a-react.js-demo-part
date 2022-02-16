import React, { useState, useEffect } from 'react';
import ChartImage from '../chart/ChartImage';
import BalanceIcon from '../../../../images/icons/My-rub-icon';

const Balance = () => {

  let randomBalance = Math.floor(Math.random() * 200); 
  let initialBalance = localStorage.getItem('balance') ? Number(localStorage.getItem('balance')) : randomBalance;

  let [balance, setBalance] = useState(initialBalance);
  let timeInterval = 10000;

  useEffect(() => {
    if (!localStorage.getItem('balance')) {
      localStorage.setItem('balance', randomBalance);
    } else {
      localStorage.setItem('balance', balance);    
    } 
  }, [balance]);

  useEffect(() => {
    const balanceSetInterval = setInterval(() => {
      setBalance(balanceInc(Number(localStorage.getItem('balance'))));
    }, timeInterval);
    return function() {clearInterval(balanceSetInterval)}
  }, [timeInterval, balance]);

  return (
    <div className='balance content-block'>
      <BalanceIcon className='balance__icon'/>
      <div className='balance__content'>
        <div className='balance__title'>Баланс</div>
        <div className='balance__text'>{balance}</div>
      </div>
      <div className='balance__chart-image'>
        <ChartImage className='balance__chart-image'/>
      </div>
    </div>
  )
};

function balanceInc(balance) {
  if (balance > 100000) return 100;
  return balance + Math.floor(Math.random() * 200);
};

export default Balance;