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
      <div className="products-main">
        <Filters />
        <div>
          <Sort />
          <Grid_List_Btn />
          {grid_view ? (
            <GridView products={products} />
          ) : (
            <ListView products={products} />
          )}
        </div>
      </div>
    </>
  );
};

//------------------------------------WRAPPER-----------------------------------
