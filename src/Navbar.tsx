import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary text-light p-3">
      <p className="h1">Expense Tracker</p>
      <RiMoneyDollarCircleFill size={32} />
    </nav>
  )
}

export default Navbar