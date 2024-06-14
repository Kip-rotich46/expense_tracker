// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import Chart from './components/Chart';

const App: React.FC = () => {
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Summary />
        <AddTransaction />
        <button onClick={toggleHistory}>
          {showHistory ? 'Hide History' : 'Show History'}
        </button>
        {showHistory && (
          <>
            <TransactionList />
            <Chart />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
