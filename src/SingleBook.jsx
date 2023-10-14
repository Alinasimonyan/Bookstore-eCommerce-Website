import { useParams } from "react-router-dom";
import { useFilterContext } from "./BookReducer";
import styled from "styled-components";
import { Stars } from "./stars";
import { AddToCart } from "./AddToCart";
import { Products } from "./Products";

export const SingleBook = () => {
  const { productID } = useParams();
 

  const product = Products.find((product) => product.id === +productID);
  console.log(product);

  const {
    title,
    author,
    image,
    price,
    publisher,
    genre,
    stars,
    about,
  } = product;

  return (
    <Wrapper>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="single-book-info">
        <h2>{title}</h2>
        <h5>
          by <p>{author}</p>
        </h5>
        <p>${price}</p>
        <div>
          <Stars stars={stars} />
        </div>
        <h3>Overview</h3>
        <p>{about}</p>
        <p>Publisher: {publisher} </p>
        <p>Genre: {genre}</p>
        <hr />
        <AddToCart product={product} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 25px;
  margin-top: 120px;
  margin-left: 70px;

  img {
    width: 250px;
    height: 330px;
    border-radius: 5px;
    margin-top: 15px;
  }

  .single-book-info {
    width: 500px;
    font-size: 15pt;
    margin-left: 30px;
    margin-left: -150px;
  }
  .single-book-info h3 {
    font-style: italic;
  }
  .add-to-cart-btn {
    background: hsl(360, 67%, 44%);
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    border: transparent;
    margin-top: 50px;
    margin-left: 90px;
    width: 110px;
    height: 30px;
    font-size: 15px;
    text-transform: capitalize;
  }

  .add-to-cart-btn: hover {
    cursor: pointer;
  }
`;
