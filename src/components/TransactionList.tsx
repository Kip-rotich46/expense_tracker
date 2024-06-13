// src/components/TransactionList.tsx
import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList: React.FC = () => {
  const { state } = useGlobalState();

  return (
    <div>
      <h3>History</h3>
      <ul>
        {state.transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
