import React from 'react';
import { Pie } from 'react-chartjs-2';

const Chart: React.FC = () => {
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ['#2ecc71', '#e74c3c'],
        hoverBackgroundColor: ['#27ae60', '#c0392b'],
      },
    ],
  };

  return (
    <div>
      <h3>Income vs Expense</h3>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
