import styled from "styled-components";
import { useFilterContext } from "./BookReducer";
import Product from "./Product";
import { useEffect, useState } from "react";

export const GridView = () => {
  const { filtered_products: products } = useFilterContext();

  console.log(products);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(products);
  // }, []);

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
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  padding: 25px;

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
