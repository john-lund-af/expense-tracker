import { useState } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import ExpensesList from './ExpensesList';
import { Expense } from './utils';


function App() {

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    console.log(expense);
    setExpenses([...expenses, expense])
  }

  const removeExpense = (expenseId: string) => {
    const modifiedExpenses = expenses.filter(expense => expense.id !== expenseId);
    setExpenses(modifiedExpenses);
  }

  return <>
    <Navbar />
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col">
          <Form handleExpense={addExpense} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <ExpensesList expenses={expenses} removeExpense={removeExpense} />
        </div>
      </div>
    </div>
  </>
}

export default App
