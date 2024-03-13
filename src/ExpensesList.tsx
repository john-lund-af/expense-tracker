import { useState } from 'react';
import { categories, capitalize, Expense } from './utils';

interface Props {
  expenses: Expense[],
  removeExpense: (id: string) => void
}

const ExpensesList = ({ expenses, removeExpense }: Props) => {
  const [selectedValue, setSelectedValue] = useState('all');

  const handleSelectChange = (value: string): void => {
    console.log(value);
    setSelectedValue(value);
  }

  if (expenses.length === 0)
    return <p className="h4 text-primary">No expenses at the moment.</p>

  // Derived state 
  const filteredExpenses = selectedValue === 'all' ? [...expenses] : expenses.filter(expense => expense.category.toLowerCase() === selectedValue.toLowerCase());

  return (
    <>
      <select value={selectedValue} onChange={(event) => handleSelectChange(event.target.value)} name="filter" id="filter" className="form-select">
        <option value="all">All</option>
        {categories.map(category => <option key={category} value={category}>{capitalize(category)}</option>)}
      </select>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => {
            return (
              <tr className='align-middle' key={index}>
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td><button onClick={() => removeExpense(expense.id)} className="btn btn-danger">Delete</button></td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Total:</th>
            <td>${filteredExpenses.reduce((prev, curr) => { return prev + curr.amount }, 0).toFixed(2)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default ExpensesList