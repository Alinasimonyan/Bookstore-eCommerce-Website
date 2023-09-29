import { useFilterContext } from "./BookReducer";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";

export const Grid_List_Btn = () => {
  const { grid_view, setGridView, setListView } = useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          onClick={() => setGridView()}
          className={`${grid_view ? "grid-active" : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => setListView()}
          className={`${!grid_view ? "list-active" : null}`}
        >
          <BsList />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
display: grid;
grid-template-columns: auto auto 1fr auto;
align-items: center;
margin-bottom: 2rem;
column-gap: 2rem;
.btn-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  button {
    background: transparent;
    border: 1px solid var(--clr-black);
    color: var(--clr-black);
    width: 1.5rem;
    border-radius: var(--radius);
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      font-size: 1rem;
    }
  }
`;
