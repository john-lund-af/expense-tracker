import { useState } from 'react';
import { categories, capitalize, Expense } from './utils';

interface Props {
  expenses: Expense[]
}

const ExpensesList = ({ expenses }: Props) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value: string): void => {
    console.log(value);
    setSelectedValue(value);
  }

  if (expenses.length === 0)
    return <p className="h4 text-primary">No expenses at the moment.</p>

  return (
    <>
      <select value={selectedValue} onChange={(event) => handleSelectChange(event.target.value)} name="filter" id="filter" className="form-select">
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
          {expenses.map((expense, index) => {
            return (
              <tr className='align-middle' key={index}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ExpensesList