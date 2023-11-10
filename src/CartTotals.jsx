import styled from "styled-components";
import { useCartContext } from "./CartContext";

export const CartTotals = () => {
  const shipping_fee = 25;

  const { total_price } = useCartContext();
  const format_total = (total_price + shipping_fee).toFixed(2);
  const format_subtotal = total_price.toFixed(2);

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal :<span>${format_subtotal}</span>
          </h5>
          <p>
            shipping fee :<span>${shipping_fee}</span>
          </p>
          <hr />
          <h4>
            order total :<span>${format_total}</span>
          </h4>
        </article>
        <button className="checkout-btn">Checkout</button>
        {/* {myUser ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button onClick={loginWithRedirect} className="btn">
            login
          </button>
        )} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  .checkout-btn {
    background: black;
    color: #fff;
    border-color: transparent;
    // padding: 0.25rem 2.5rem;
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

  .checkout-btn:hover {
    background: rgb(120, 120, 120);
    color: #fff;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }
`;
