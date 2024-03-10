import CategorySelect from './CategorySelect';

const CategoryList = () => {
  return (
    <>
      <CategorySelect />
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
          <tr>
            <td>Milk</td>
            <td>5.00</td>
            <td>Groceries</td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CategoryList