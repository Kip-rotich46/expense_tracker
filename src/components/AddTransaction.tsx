// src/components/AddTransaction.tsx
import React, { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';
import { Transaction } from '../types';

const AddTransaction: React.FC = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('income'); // Add type state to handle income or expense
  const [error, setError] = useState('');
  const { state, dispatch } = useGlobalState();

  const totalBalance = state.transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === 'expense' && amount > totalBalance) {
      setError('Expense exceeds available balance');
      return;
    }

    const newTransaction: Transaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: type === 'expense' ? -amount : amount, // Negative for expense
      category: 'General',  // or add a state to handle category
    };

    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });

    setText('');
    setAmount(0);
    setError('');
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
        <div>
          <label htmlFor="type">Type</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
