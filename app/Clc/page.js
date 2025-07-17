
"use client"

import React, { useState } from 'react';

function NetProfitCalculator() {
  const [sale, setSale] = useState(0);
  const [purchase, setPurchase] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [tax, setTax] = useState(0);

  const netProfit = sale - purchase - expenses - tax;

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Net Profit Calculator</h2>

      <label>Total Sale: </label>
      <input type="number" onChange={e => setSale(+e.target.value)} /><br /><br />

      <label>Purchase Cost: </label>
      <input type="number" onChange={e => setPurchase(+e.target.value)} /><br /><br />

      <label>Expenses: </label>
      <input type="number" onChange={e => setExpenses(+e.target.value)} /><br /><br />

      <label>Tax: </label>
      <input type="number" onChange={e => setTax(+e.target.value)} /><br /><br />

      <h3>Net Profit: {netProfit}</h3>
    </div>
  );
}

export default NetProfitCalculator;
