import styled from "styled-components";
import { useFilterContext } from "./BookReducer";

export const GridView = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, title, genre, author, image, publisher, price } = product;
        return (
          <div key={id}>
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
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;

  img {
    display: block;
    width: 130px;
    height: 170px;
    object-fit: cover;
  }

  .book-div {
    margin: 350px;
  }
`;
