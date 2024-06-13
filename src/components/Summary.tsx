import React from 'react';

const Summary: React.FC = () => {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>$0.00</h1>
      <div>
        <div>
          <h4>Income</h4>
          <p>$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p>$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
