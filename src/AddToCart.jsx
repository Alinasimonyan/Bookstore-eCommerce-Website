import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";

export const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id } = product;

  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => oldAmount + 1);
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount((oldAmount) => oldAmount - 1);
    }
  };

  return (
    <>
      <Wrapper className="amount-buttons">
        <button type="button" className="btn" onClick={decrease}>
          <FaMinus />
        </button>
        <h2>{amount}</h2>
        <button type="button" className="btn" onClick={increase}>
          <FaPlus />
        </button>
        <Link to="/cart">
          <button
            className="addToCartBtn"
            onClick={() => addToCart(id, product, amount)}
          >
            Add to Cart
          </button>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;

  .btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-items: center;
  }
  .addToCartBtn {
    background: hsl(360, 67%, 44%);
    color: #fff;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-top: 10px;
    margin-left: 90px;
    width: 120px;
    height: 35px;
    text-transform: uppercase;
  }
  .addToCartBtn:hover {
    background: hsl(0, 89%, 93%);
    color: #130707;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }
`;
