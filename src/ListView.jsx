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
            <div key={product.id} className="book">
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
    width: 11em;
    height: 14em;
    object-fit: cover;
  }
`;
