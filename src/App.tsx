// src/App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import Chart from './components/Chart';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Summary />
        <AddTransaction />
        <TransactionList />
        <Chart />
      </div>
    </div>
  );
};

export default App;
