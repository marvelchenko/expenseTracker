import { useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './components/Context/GlobalState';

function App() {
  const [showTracker, setShowTracker] = useState(false); // State to toggle views

  return (
    <GlobalProvider>
      <div className="bg-stone-950 flex flex-col items-center justify-center min-h-screen m-0 font-sans text-lg">
        {!showTracker ? (
          // Welcome Screen
          <div className="w-96 bg-white px-6 py-8 text-center shadow-lg rounded-md">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Welcome to Expense Tracker
            </h1>
            <p className="text-gray-600 mb-6">
              Manage your income and expenses effortlessly.
            </p>
            <button
              onClick={() => setShowTracker(true)}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200 font-semibold"
            >
              Get Started
            </button>
          </div>
        ) : (
          // Main Expense Tracker
          <div className="w-80 bg-white px-4 py-4 shadow-lg rounded-md">
            <Header />
            <div>
              <Balance />
            </div>
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        )}
      </div>
    </GlobalProvider>
  );
}

export default App;
