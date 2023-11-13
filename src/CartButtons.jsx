import { FaCartArrowDown } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSideBarContext } from "./SidebarContext";

export const CartButtons = () => {
  const { closeSideBar } = useSideBarContext();
  return (
    <Wrapper>
      <div className="cart-buttons">
        <Link to="/cart" onClick={closeSideBar} className="cart-btn">
          Cart
          <FaCartArrowDown />
        </Link>
        <Link to="login" onClick={closeSideBar} className="cart-btn">
          Login <FaUserPlus />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin-left: 9em;
  margin-top: 3.5em;
  width: 225px;

  .cart-btn {
    margin-left: 1.4em;
    font-size: 1.3rem;
    text-decoration: none;
    letter-spacing: 0.1rem;
    color: hsl(209, 61%, 16%);
  }
`;
