import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { Wrapper, GraphWrapper } from './BarGraph.styles';

interface BarGraphProps {
  title: string;
}

const BarGraph: React.FC<BarGraphProps> = ({ title }) => {
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
          label: 'Progress',
          data: [
            32,
            14,
            25,
            18,
            32,
            29,
            29,
            29,
            29,
            29,
            29,
            29,
            29,
            29,
            29,
            29,
            29,
          ],
          backgroundColor: 'rgba(112, 165, 20, 1)',
          borderWidth: 1,
          order: 3,
        },
        {
          label: 'Stasis',
          data: [10, 5, 9, 5, 4, 2, 10, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
          backgroundColor: 'rgba(250, 238, 28, 1)',
          borderWidth: 1,
          order: 2,
        },
        {
          label: 'Regress',
          data: [5, 1, 2, 4, 3, 2, 1, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
          backgroundColor: 'rgba(255, 87, 87, 1)',
          order: 1,
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
        <Bar
          data={chartData}
          options={{
            barThickness: 2,
            responsive: true,
            maintainAspectRatio: false,
            title: { text: 'THICCNESS SCALE', disply: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maintainAspectRatio: false,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                  },
                  stacked: true,
                },
              ],
              xAxes: [
                {
                  stacked: true,
                  gridLines: {
                    display: true,
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

export default BarGraph;
