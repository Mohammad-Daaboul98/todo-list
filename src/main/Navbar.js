import { Link } from 'react-router-dom';
const Navbar = () => {
  return (

    <nav className="navbar">
      <h1>Todo</h1>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/Weather">Weather</Link>
        <Link to="/create">Create</Link>
        <Link to="/">User</Link>
      </div>
    </nav>
  );
}

export default Navbar;