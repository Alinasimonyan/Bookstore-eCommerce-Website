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
          <FaCartArrowDown />
        </Link>
        <Link to="login" onClick={closeSideBar} className="cart-btn">
          <FaUserPlus />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.7rem;
  margin-left: 30%;
  margin-top: 2em;

  .cart-btn {
    margin-left: 1.4em;
  }
`;
