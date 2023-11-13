import { useSideBarContext } from "./SidebarContext";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const SidebarMenu = () => {
  const { openSideBar } = useSideBarContext();

  return (
    <Wrapper>
      <button className="bar" onClick={openSideBar}>
        <FaBars />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .bar {
    position: fixed;
    right: 0;
    top: 0;
    margin-right: 0.7em;
    margin-top: 0.7em;
    color: #a9a9a9;
    border-color: transparent;
    background-color: transparent;
    font-size: 35px;
  }

  .bar:hover {
    cursor: pointer;
  }

  @media (min-width: 675px) {
    .bar {
      display: none;
    }
  }
`;
