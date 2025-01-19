import { useState } from 'react';
import { useWallet } from '../context/WalletContext';

const Budget = () => {
  const { budget, setBudget } = useWallet();
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  };

  const updateBudget = () => {
    setBudget(parseFloat(newBudget));
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Budget Management</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h3 className="text-xl font-semibold mb-2">Current Budget</h3>
        <p className="text-2xl font-bold text-green-500">${budget}</p>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            value={newBudget}
            onChange={handleBudgetChange}
            className="w-full p-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            onClick={updateBudget}
            className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Update Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
