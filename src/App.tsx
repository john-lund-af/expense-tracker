import Navbar from './Navbar';
import Form from './Form';
import CategoryList from './CategoryList';

function App() {
  return <>
    <Navbar />
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col">
          <Form />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <CategoryList />
        </div>
      </div>
    </div>
  </>
}

export default App
