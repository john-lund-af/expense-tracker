const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">Description</label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select name="category" id="category" className="form-select">
          <option value="0">Groceries</option>
          <option value="1">Utilities</option>
          <option value="2">Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form