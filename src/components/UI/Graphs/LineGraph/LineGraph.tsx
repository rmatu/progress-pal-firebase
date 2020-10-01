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
        '01/10/2020',
        '02/10/2020',
        '03/10/2020',
        '04/10/2020',
        '05/10/2020',
        '06/10/2020',
        '07/10/2020',
      ],
      datasets: [
        {
          label: 'KG',
          data: [32, 34, 54, 43, 46, 32, 12],
          borderWidth: 2,
          backgroundColor: 'rgba(112, 165, 20, 0.2)',
          borderColor: 'rgba(112, 165, 20, 1)',
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
