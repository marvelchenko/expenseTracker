import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="my-6 mx-auto max-w-md">
      <h3 className="text-lg font-bold pb-2 border-b">History</h3>
      <ul id="list" className="list-none">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
