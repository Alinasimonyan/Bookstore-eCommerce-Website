import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import styled from "styled-components";
import { useSideBarContext } from "./SidebarContext";

import { Sidebar } from "./Sidebar";
import { SidebarMenu } from "./SidebarMenu";

export const Navbar = () => {
  const { isSideBarOpen } = useSideBarContext();
  return (
    <>
      <Wrapper>
        <div>
          <img
            src="https://www.designevo.com/res/templates/thumb_small/white-hand-and-red-book.webp"
            alt="logo"
            className="logo"
          />
          {isSideBarOpen ? <Sidebar /> : <SidebarMenu />}
        </div>
        <div className="navLinks">
          <div className="home-about-books">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/books">Books</NavLink>
          </div>
          <div className="cart-login">
            <NavLink to="/cart">
              Cart <FaCartArrowDown />
            </NavLink>
            <NavLink to="login">
              Login <FaUserPlus />
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  .logo {
    width: 6em;
    height: 6em;
  }

  .navLinks {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .home-about-books {
    display: flex;
    justify-content: space-between;
    margin-right: 10em;
  }

  .home-about-books a {
    margin-right: 2em;
  }

  .cart-login {
    display: flex;
    justify-content: space-between;
    margin-right: 3em;
  }

  .cart-login a {
    margin-right: 1em;
  }

  a {
    font-size: larger;
    text-decoration: none;
    color: rgb(54, 54, 54);
  }

  @media (max-width: 675px) {
    .navLinks {
      display: none;
    }
  }
`;
