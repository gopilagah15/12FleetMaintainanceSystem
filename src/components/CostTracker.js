import React, { useState } from 'react';

const CostTracker = ({ costs, onAddCost }) => {
  const [vehicleId, setVehicleId] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddCost = (e) => {
    e.preventDefault();
    const cost = { vehicleId, amount: parseFloat(amount) };
    onAddCost(cost);
    setVehicleId('');
    setAmount('');
  };

  return (
    <div>
      <h2>Cost Tracker</h2>
      <form onSubmit={handleAddCost}>
        <input placeholder="Vehicle ID" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} />
        <input placeholder="Cost Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Add Cost</button>
      </form>
      <h3>Total Maintenance Costs</h3>
      <ul>
        {costs.map((cost, index) => (
          <li key={index}>Vehicle {cost.vehicleId}: ${cost.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default CostTracker;
