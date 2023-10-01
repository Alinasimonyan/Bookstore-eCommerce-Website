import { getCategories } from "./GetCategories";
import { useFilterContext } from "./BookReducer";
import styled from "styled-components";

export const Filters = () => {
  const {
    filters: { text, publisher, shipping, price, min_price, max_price },
    all_products,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const genres = getCategories(all_products, "genre");
  const publishers = getCategories(all_products, "publisher");

  // const formatPrice = (number) => {
  //   return new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(number / 100);
  // };

  console.log(price);

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

          <div className="form-control">
            <h5>Genres</h5>
            <div>
              {genres.map((genre, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="genre"
                    onClick={updateFilters}
                  >
                    {genre}
                  </button>
                );
              })}
            </div>
          </div>

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
  margin-top: 50px;
  .form-control {
    margin-bottom: 1.25rem;
    margin-right: 70px;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: hsl(210, 36%, 96%);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    width: 100px;
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
    font-size: 1rem;
  }
  .clear-btn {
    background: hsl(360, 67%, 44%);
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-top: 20px;
    margin-left: 300px;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
