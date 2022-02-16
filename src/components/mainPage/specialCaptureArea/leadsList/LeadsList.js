import React, { useState, useEffect } from 'react';
import LeadItem from './leadItem/LeadItem';
import { leadsListData } from '../../../../app/context/data';
const LeadsList = () => {

  let amountItems = 3;
  let timeInterval = 10000;

  let [leads, setLeads] = useState(fnRandomItems(leadsListData, amountItems));

  useEffect(() => {
    const idSetInterval = setInterval(() => {
      setLeads(fnRandomItems(leadsListData, amountItems));   
    }, timeInterval);
    return function(){
      clearInterval(idSetInterval);
    }
  }, [leadsListData, amountItems, timeInterval]);

  let timeCount = 1;

  return (
    <ul className='leads-list'>
      {leads.map((lead, index) => {
        timeCount += Math.floor(Math.random() * 8) + 1;
        lead.time = timeCount.toString() + ' сек.';
        const { id } = lead;
        return (
          <LeadItem key={id === undefined ? index : id} leadItem={lead}/>
        )
      })}
    </ul>
  );
};

function fnRandomItems(list, amountItems){
  let randomNonRecurringInt = fnRandomNonRecurringInt(0, list.length - 1, amountItems);
  let items = [];
  for (let i = 0; i < randomNonRecurringInt.length; i++){
    items.push(list[randomNonRecurringInt[i]]);
  }
  return items;
}

function fnRandomNonRecurringInt(minInt, maxInt, amountInt){
  if (minInt > maxInt) [minInt, maxInt] = [maxInt, minInt];
  let startArr = [], resultArr = [];
  for (let i = 0;  i < maxInt - minInt + 1; i++) startArr[i] = minInt + i;
  if (amountInt > maxInt - minInt + 1) amountInt = maxInt - minInt + 1
  for (let i = 0; i < amountInt; i++){
    let index = Math.floor(Math.random() * startArr.length);
    resultArr.push(...startArr.splice(index, 1));
  }
  return resultArr
}

export default LeadsList;
