import React, { useContext, useState } from 'react';
import { GlobalContext } from './Context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSign = (sign) => {
    // Ensure the amount is a string before manipulating
    let updatedAmount = amount.toString();
  
    if (updatedAmount.startsWith('-') || updatedAmount.startsWith('+')) {
      // Replace the existing sign with the new sign
      updatedAmount = sign + updatedAmount.slice(1);
    } else {
      // Prepend the new sign
      updatedAmount = sign + updatedAmount;
    }
  
    setAmount(updatedAmount);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setText(''); // Clear form inputs after submission
    setAmount('');
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
            required
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        {/* Amount Input */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="amount" className="text-sm font-medium">
            Amount <br />
            <div className="flex items-center gap-2">
            <button type='button' onClick={() => handleSign('+')}
                className='bg-green-500 text-white px-4 py-4 rounded hover:bg-green-600 transition'> 
                Income
              </button>
              <button type='button' onClick={() => handleSign('-')}
                className='bg-red-500 text-white px-4 py-4 rounded hover:bg-red-600 transition'> 
                Expense
              </button>
            </div>
          </label>
          <input
            required
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-300"
           />
          <small className="block text-sm mt-1 text-gray-500">
         Use the buttons to specify the type of transaction.
        </small>
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
