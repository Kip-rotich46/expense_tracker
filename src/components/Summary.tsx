// src/components/Summary.tsx
import React from 'react';
import { useGlobalState } from '../context/GlobalState';

const Summary: React.FC = () => {
  const { state } = useGlobalState();

  const totalIncome = state.transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = state.transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome + totalExpenses;

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 style={{color:'white'}}>${balance.toFixed(2)}</h1>
      <div>
        <div>
          <h4>Income</h4>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p>${Math.abs(totalExpenses).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
