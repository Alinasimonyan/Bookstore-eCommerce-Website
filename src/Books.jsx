import styled from "styled-components";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import { useFilterContext } from "./BookReducer";
import { Sort } from "./sort";
import { Filters } from "./Filters";
import { Grid_List_Btn } from "./Grid_List_Btn";

export const BookList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  // ------------------------SORT BOOKS SECTION--------------------------------

  return (
    <div className="products-main">
      <Grid_List_Btn />
      <Sort />
      <Filters />
      <Wrapper>
        {grid_view ? (
          <GridView products={products} />
        ) : (
          <ListView products={products} />
        )}
      </Wrapper>
    </div>
  );
};

//------------------------------------WRAPPER-----------------------------------
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;

  button {
    width: 30px;
    height: 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 20px;
  }

  hr {
    border: 0;
    clear: both;
    display: block;
    width: 20%;
    background-color: grey;
    height: 1.5px;
    margin-left: 50px;
    margin-right: 5px;
  }
  .sort-input {
    border-color: transparent;
    font-weight: bold;
  }
`;
