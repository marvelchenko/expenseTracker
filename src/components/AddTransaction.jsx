import React, { useContext, useState } from 'react';
import { GlobalContext } from './Context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText(''); // Clear form inputs after submission
    setAmount(0);
  };

  return (
    <div className="mt-6 mx-auto max-w-md">
      <h3 className="text-lg font-bold pb-2">Add new transaction</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Text Input */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="text" className="text-sm font-medium">
            Description
          </label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Amount Input */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="amount" className="text-sm font-medium">
            Amount <br />
            <span className="text-xs text-gray-500">(negative - expense, positive - income)</span>
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md shadow-sm hover:bg-blue-600 transition duration-200"
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};
