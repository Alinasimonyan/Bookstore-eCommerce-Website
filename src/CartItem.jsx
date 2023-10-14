import styled from "styled-components";
import { useCartContext } from "./CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export const CartItem = ({ id, image, title, price, amount }) => {
  const { toggleAmount, removeItem } = useCartContext();

  const subtotal = price * amount;
  const fixedPrice = subtotal.toFixed(2);

  const increase = () => {
    toggleAmount(id, "inc");
  };

  const decrease = () => {
    if (amount > 1) {
      toggleAmount(id, "dec");
    }
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{title}</h5>
          <h5 className="price-small">${price}</h5>
        </div>
      </div>
      <h5 className="price">${price}</h5>
      <div className="buttons">
        <button type="button" onClick={decrease}>
          <FaMinus />
        </button>
        <h2>{amount}</h2>
        <button type="button" onClick={increase}>
          <FaPlus />
        </button>
      </div>
      <h5 className="subtotal">${fixedPrice}</h5>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .price-small {
    color: hsl(210, 22%, 49%);
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    button {
      width: rem;
      height: 1.5rem;
      margin-top: 20px;
      margin-right: 25px;
      font-size: 0.75rem;
      background-color: white;
      border-color: transparent;
    }
    button: hover {
      cursor: pointer;
    }
  }

  .remove-btn {
    color: white;
    background: transparent;
    border: transparent;
    letter-spacing: 0.1rem;
    background: hsl(360, 67%, 44%);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    cursor: pointer;
  }

  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: hsl(210, 22%, 49%);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: hsl(210, 22%, 49%);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
  }
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  align-items: center;
  grid-template-rows: 75px;
  img {
    height: 100%;
  }
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 100px 200px;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    button {
      height: 1.5rem;
      margin-top: 22px;
      margin-right: 30px;
      border-color: transparent;
      background-color: white;
    }
  }
`;
