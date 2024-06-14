// src/components/Chart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

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
    <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
      <h3>Income vs Expense</h3>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
