// src/components/AddTransaction.tsx
import React, { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';
import { Transaction } from '../types';

const AddTransaction: React.FC = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { dispatch } = useGlobalState();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction: Transaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount,
      category: 'General'  // or add a state to handle category
    };

    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });

    setText('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
