import styled from "styled-components";
import { useFilterContext } from "./BookReducer";
import Product from "./Product";

export const ListView = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <>
      <Wrapper>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Product {...product} />
            </div>
          );
        })}
      </Wrapper>
    </>
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
