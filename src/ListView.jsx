import styled from "styled-components";
import { useFilterContext } from "./BookReducer";

export const ListView = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, title, genre, author, image, publisher, price } = product;

        return (
          <div key={id} className="book-div">
            <img src={image} alt={title} />
            <p>
              {title} by {author}
            </p>
            ${price}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 5rem;
  grid-template-columns: 1fr;

  img {
    display: block;
    width: 130px;
    height: 170px;
    object-fit: cover;
  }

  .book-div {
    margin-bottom: 10px;
  }
`;
