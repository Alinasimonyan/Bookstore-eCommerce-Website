import styled from "styled-components";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import { useFilterContext } from "./BookReducer";
import { Sort } from "./sort";
import { Filters } from "./Filters";
import { Grid_List_Btn } from "./Grid_List_Btn";
import { Quote } from "./QuoteSection";

export const BookList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  // ------------------------SORT BOOKS SECTION--------------------------------

  return (
    <>
      <Quote />
      <Wrapper>
        <div className="filter-section">
          <Filters />
        </div>
        <div className="books-display">
          <div className="sort-section">
            <Sort />
          </div>
          <Grid_List_Btn />
          {grid_view ? (
            <GridView products={products} />
          ) : (
            <ListView products={products} />
          )}
        </div>
      </Wrapper>
    </>
  );
};

//------------------------------------WRAPPER-----------------------------------

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 7em;
  margin-right: 10em;

  @media (max-width: 675px) {
    .filter-section,
    .sort-section {
      display: none;
    }
  }
`;
