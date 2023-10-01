import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import logo from "./images/logo.jpeg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="logo"
        style={{
          width: "190px",
          height: "170px",
          marginTop: "-50px",
          marginLeft: "-300px",
          marginBottom: "-50px",
          borderRadius: "12px",
        }}
      />
      <div className="cart-login">
        <NavLink to="/cart">
          Cart <FaCartArrowDown />
        </NavLink>
        <NavLink to="login">
          Login <FaUserPlus />
        </NavLink>
      </div>
      <div className="home-about-books">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/books">Books</NavLink>
      </div>
    </div>
  );
};
