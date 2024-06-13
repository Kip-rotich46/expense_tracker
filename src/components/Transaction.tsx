// src/components/Transaction.tsx
import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import { Transaction as TransactionType } from '../types';

interface Props {
  transaction: TransactionType;
}

const Transaction: React.FC<Props> = ({ transaction }) => {
  const { dispatch } = useGlobalState();

  const sign = transaction.amount < 0 ? '-' : '+';
  const amount = `${sign}$${Math.abs(transaction.amount)}`;

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: transaction.id });
  };

  return (
    <li>
      {transaction.text} <span>{amount}</span>
      <button onClick={handleDelete}>x</button>
    </li>
  );
};

export default Transaction;
