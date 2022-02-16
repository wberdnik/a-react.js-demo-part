import React, { useEffect } from 'react';

const ChartImage = () => {

  useEffect(() => {
    let collectionG = document.getElementsByClassName('bar');
    const getChild = (n) => collectionG[n].firstChild;
    const chartInterval = setInterval(() => {
      let firstY = getChild(0).getAttribute('y');
      let firstHeight = getChild(0).getAttribute('height');
      let length = collectionG.length;
      for (let i = 1; i < length; i++) {
        let y = getChild(i).getAttribute('y');
        let height = getChild(i).getAttribute('height');
        getChild(i - 1).setAttribute('y', y);
        getChild(i - 1).setAttribute('height', height);
      };
      getChild(length - 1).setAttribute('y', firstY);
      getChild(length - 1).setAttribute('height', firstHeight);
    }, 10000);

    return clearInterval(chartInterval);
  }, []);



  return (
    <svg viewBox="0 0 320 120" aria-labelledby="title desc" role="img">
      <title id="title">Диаграмма доходов</title>
      <g className="bar">
        <rect width="9" height="90" x="0" y="20"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="70" x="10" y="40"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="100" x="20" y="10"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="110" x="30" y="0"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="80" x="40" y="30"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="90" x="50" y="20"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="60" x="60" y="50"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="100" x="70" y="10"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="110" x="80" y="0"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="90" x="90" y="20"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="70" x="100" y="40"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="60" x="110" y="50"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="90" x="120" y="20"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="80" x="130" y="30"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="100" x="140" y="10"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="110" x="150" y="0"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="50" x="160" y="60"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="70" x="170" y="40"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="100" x="180" y="10"></rect>
      </g>
      <g className="bar">
          <rect width="9" height="90" x="190" y="20"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="70" x="200" y="40"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="100" x="210" y="10"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="110" x="220" y="0"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="100" x="230" y="10"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="80" x="240" y="30"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="90" x="250" y="20"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="110" x="260" y="0"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="70" x="270" y="40"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="80" x="280" y="30"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="110" x="290" y="0"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="100" x="300" y="10"></rect>
      </g>
      <g className="bar">
        <rect width="9" height="80" x="310" y="30"></rect>
      </g>
    </svg>
  )
};

export default ChartImage;