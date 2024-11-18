import React, {useContext} from 'react'
import { GlobalContext } from './Context/GlobalState'

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
  return (
    <div className="flex justify-between bg-white shadow p-4 rounded-lg mx-auto max-w-md">
      
        <div className='text-center'>
          <h4 className='font-medium text-lg'>Income</h4>
          <p  className="text-green-500 font-bold text-xl">{income}</p>
        </div>
        <div className='border-r border-gray-300 mx-4'></div>
        <div className='text-center'>
          <h4 className='font-medium text-lg'>Expense</h4>
          <p  className="text-red-500 font-bold text-xl">{expense}</p>
        </div>
      
    </div>

  )
}

