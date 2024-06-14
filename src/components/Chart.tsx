// src/components/Chart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useGlobalState } from '../context/GlobalState';
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
  const { state } = useGlobalState();

  const income = state.transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = state.transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [income, Math.abs(expense)],
        backgroundColor: ['#2ecc71', '#e74c3c'],
        hoverBackgroundColor: ['#27ae60', '#c0392b'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Income vs Expense</h3>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
