import { getCategories } from "./GetCategories";
import { useFilterContext } from "./BookReducer";
import styled from "styled-components";
import { GenresLargeScreen } from "./Genres";
// import { GenresSmallScreen } from "./Genres";

export const Filters = () => {
  const {
    filters: { text, publisher, shipping, price, min_price, max_price },
    all_products,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const publishers = getCategories(all_products, "publisher");

  return (
    <Wrapper>
      <div className="filter-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="search-div">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              className="search-input"
              onChange={updateFilters}
            />
          </div>

          <div className="form-control genre-large-screen">
            <GenresLargeScreen />
          </div>
          {/* <div className="form-control genre-small-screen">
            <GenresSmallScreen />
          </div> */}

          <div className="form-control">
            <h5>Publishers</h5>
            <select
              name="publisher"
              value={publisher}
              onChange={updateFilters}
              className="publisher-btn"
            >
              {publishers.map((publisher, index) => {
                return (
                  <option key={index} value={publisher}>
                    {publisher}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-control">
            <h5>Price</h5>
            <p className="price">${price}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>

          <div className="shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
        </form>
      </div>
      <button type="button" className="clear-btn" onClick={clearFilters}>
        clear filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control h5 {
    font-size: 1rem;
  }
  .genre-small-screen {
    display: none;
  }

  margin-top: 50px;
  .form-control {
    margin-bottom: 1.25rem;
    margin-right: 70px;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .filter-section {
    display: flex;
    justify-content: right;
  }

  .search-input {
    padding: 0.5rem;
    background: hsl(210, 36%, 96%);
    border-radius: 5px;
    border-color: transparent;
    width: 100px;
    font-size: 1rem;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 0.1rem;
    color: hsl(210, 22%, 49%);
    cursor: pointer;
  }

  .publisher-btn {
    background: hsl(210, 36%, 96%);
    border-radius: 0.25rem;
    border-color: transparent;
    padding: 0.25rem;
    width: 120px;
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 0.9rem;
  }
  .clear-btn {
    background: hsl(360, 67%, 44%);
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-top: 50px;
    margin-left: 90px;
  }

  .category_filter {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .filter-btn {
    border-color: transparent;
    background-color: white;
  }

  .filter-btn:hover {
    cursor: pointer;
  }
`;
