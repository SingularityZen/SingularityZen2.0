import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CandlestickChart = () => {
  // Sample data for the Candlestick chart
  const series = [
    {
      data: [
        {
          x: new Date(2023, 10, 1).getTime(),
          y: [100, 150, 90, 120], // [Open, High, Low, Close]
        },
        // Add more data points as needed
      ],
    },
  ];

  const options = {
    chart: {
      type: 'candlestick',
      height: '400',
    },
    title: {
      text: 'Candlestick Chart',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return (
    <div className="candlestick-chart">
      <ReactApexChart options={options} series={series} type="candlestick" height={400} />
    </div>
  );
};

export default CandlestickChart;
