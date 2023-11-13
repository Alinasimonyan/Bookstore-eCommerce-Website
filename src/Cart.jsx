import { useCartContext } from "./CartContext";
import styled from "styled-components";
import { CartColumns } from "./CartColumns";
import { CartItem } from "./CartItem";
import { CartTotals } from "./CartTotals";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, clearCart } = useCartContext();
  if (cart.length <= 0) {
    return (
      <EmptyCart>
        <h1>Your Cart is Empty!</h1>
        <Link to="/books">
          <button className="cart-btn">Explore Books</button>
        </Link>
      </EmptyCart>
    );
  }
  return (
    <Wrapper>
      <div className="section">
        <div className="section-center">
          <CartColumns />
          {cart?.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <hr />
          <div className="link-container">
            <Link to="/books">
              <button className="cart-btn">Continue Shopping</button>
            </Link>
            <button
              type="button"
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <CartTotals />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section {
    padding: 5rem 0;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }

  .link-container {
    display: flex;
    justify-content: space-between;
  }

  .cart-btn,
  .clear-cart-btn {
    background: hsl(360, 67%, 44%);
    color: #fff;
    border-color: transparent;
    padding-bottom: 1.5rem;
    padding-top: 0.3rem;
    border-radius: 0.25rem;
    margin-top: 10px;
    margin-left: 90px;
    width: 220px;
    height: 25px;
    letter-spacing: 0.1rem;
    font-weight: 400;
    text-transform: capitalize;
    font-size: 16px;
  }

  .cart-btn:hover,
  .clear-cart-btn:hover {
    background: hsl(0, 89%, 93%);
    color: #130707;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }

  .clear-cart-btn {
    width: 250px;
    height: 30px;
  }

  @media (max-width: 675px) {
    .link-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .link-container button {
      width: 11em;
    }
  }
`;

const EmptyCart = styled.section`
  margin-left: 40%;
  margin-top: 10%;
  color: #a9a9a9;
  letter-spacing: 0.1rem;
  font-size: 0.9rem;

  .cart-btn {
    background: hsl(360, 67%, 44%);
    color: #fff;
    border-color: transparent;
    padding-bottom: 1.5rem;
    padding-top: 0.3rem;
    border-radius: 0.25rem;
    width: 220px;
    height: 25px;
    letter-spacing: 0.1rem;
    font-weight: 400;
    text-transform: capitalize;
    font-size: 16px;
  }

  .cart-btn:hover {
    background: hsl(0, 89%, 93%);
    color: #130707;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }

  
  }
`;
