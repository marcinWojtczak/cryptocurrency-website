import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import "./lineChart.css"
Chart.register(...registerables);

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice = [];
  const coinTimeStamp = [];
  
  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinTimeStamp.push(new Date(coinHistory?.history[i].timestamp * 1000).toLocaleDateString());
    
  }

    
  const data = {
    type: 'bar',
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#81AFDD',
        borderColor: '#81AFDD',
        
      },
    ],
  };

  const options = {
    scales: {
      y: {
          beginAtZero: true,
        },
      },
  };

  

  return (
    <div className="lineChart__container">
      <div className="lineChart__header">
        <h2 className="lineChart__title gradient--text">{coinName} Price Chart</h2>
        <div className="lineChart__data">
          <h4 className="lineChart__price--change">{coinHistory?.change}%</h4>
          <h4 className="lineChart__current--price">Current {coinName} Price: <span className="lineChart__current--number">${currentPrice}</span></h4>
        </div>
      </div>
      <Line data={data} options={options}/>
    </div>
  )
}

export default LineChart