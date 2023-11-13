import styled from "styled-components";
import { getCategories } from "./GetCategories";
import { useFilterContext } from "./BookReducer";

export const GenresLargeScreen = () => {
  const { all_products, updateFilters } = useFilterContext();
  const genres = getCategories(all_products, "genre");
  return (
    <WrapperLargeScreen>
      <h5>Genres</h5>
      <div className="genre">
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
    </WrapperLargeScreen>
  );
};

export const GenresSmallScreen = () => {
  const {
    filters: { genre },
    all_products,
    updateFilters,
  } = useFilterContext();
  const genres = getCategories(all_products, "genre");
  return (
    <div className="genre">
      <h5>Genres</h5>
      <select
        name="genre"
        value={genre}
        onChange={updateFilters}
        className="publisher-btn"
      >
        {genres.map((genre, index) => {
          return (
            <option key={index} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const WrapperLargeScreen = styled.section`
  .genre button,
  h5 {
    font-size: 1rem;
  }
  .genre-div {
    display: flex;
    flex-direction: column;
  }

  .genre-btn {
    border-color: transparent;
    background-color: white;
    margin: 2px;
  }

  .genre-btn:hover {
    cursor: pointer;
  }
`;
