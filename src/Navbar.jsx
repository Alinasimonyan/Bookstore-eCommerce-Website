import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home-about-books">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/books">Books</NavLink>
      </div>
      <div className="cart-login">
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
    </div>
  );
};
