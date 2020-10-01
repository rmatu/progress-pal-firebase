import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { Wrapper, GraphWrapper } from './LineGraph.styles';

interface LineGraphProps {
  title: string;
}

const LineGraph: React.FC<LineGraphProps> = ({ title }) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        '1',
        '2',
      ],
      datasets: [
        {
          label: 'level of thiccness',
          data: [0, 32, 10, 90, 10, 32, 0],
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Wrapper>
      <h1>{title}</h1>
      <GraphWrapper>
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: { text: 'THICCNESS SCALE', disply: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </GraphWrapper>
    </Wrapper>
  );
};

export default LineGraph;
