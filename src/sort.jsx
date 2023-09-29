import { useFilterContext } from "./BookReducer";
import styled from "styled-components";

export const Sort = () => {
  const { sort, updateSort, filtered_products: products } = useFilterContext();

  return (
    <Wrapper>
      <p>{products.length} Books Found</p>
      <hr />
      <form className="form">
        <label htmlFor="sort"> Sort By </label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;

  .form {
    margin-top: 20px;
  }
`;
