import styled from "styled-components";
import { useFilterContext } from "./BookReducer";
import Product from "./Product";

export const GridView = () => {
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
  grid-template-columns: repeat(3, 1fr);
  row-gap: 35px;
  column-gap: 45px;
  padding: 25px;
  font-size: 11px;
  img {
    display: block;
    width: 130px;
    height: 170px;
    object-fit: cover;
  }

  .book-div {
    margin: 350px;
  }

  @media (max-width: 675px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
