import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionType = transaction.amount < 0 ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500';

  return (
    <li
      className={`flex justify-between items-center bg-white shadow p-3 rounded my-2 border-l-4 ${transactionType}`}
    >
      <span>{transaction.text}</span>
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="text-white bg-red-500 hover:bg-red-600 rounded-full px-2 py-1 ml-3 text-xs"
      >
        x
      </button>
    </li>
  );
};
