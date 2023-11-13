import styled from "styled-components";
import { getCategories } from "./GetCategories";
import { useFilterContext } from "./BookReducer";

export const Genres = () => {
  const { all_products, updateFilters } = useFilterContext();
  const genres = getCategories(all_products, "genre");
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
  }

  .genre-btn:hover {
    cursor: pointer;
  }
`;
