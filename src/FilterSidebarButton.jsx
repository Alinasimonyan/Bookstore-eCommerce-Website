import { useSideBarContext } from "./SidebarContext";
import { BsFilterLeft } from "react-icons/bs";
import styled from "styled-components";

export const FilterSidebarButton = () => {
  const { openFilterSideBar } = useSideBarContext();

  return (
    <Wrapper>
      <button className="filter-btn" onClick={openFilterSideBar}>
        <BsFilterLeft />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .filter-btn {
    background: transparent;
    color: black;
    font-size: 3.5em;
  }
`;
