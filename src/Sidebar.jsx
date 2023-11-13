import { useSideBarContext } from "./SidebarContext";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Links } from "./Links";
import { CartButtons } from "./CartButtons";

export const Sidebar = () => {
  const { closeSideBar } = useSideBarContext();

  return (
    <Wrapper>
      <aside className="sidebar">
        <div className="sidebar-header">
          <img
            src="https://www.designevo.com/res/templates/thumb_small/white-hand-and-red-book.webp"
            alt="logo"
            className="logo"
          />
          <button className="close-btn" onClick={closeSideBar}>
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-nav-links">
          {Links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSideBar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  .sidebar {
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: white;
    transition: all 0.3s linear;
    z-index: 1;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .sidebar-nav-links {
    margin-bottom: 2rem;
    list-style-type: none;
  }

  .sidebar-nav-links a {
    margin-left: 0.2em;
    display: block;
    text-align: left;
    text-decoration: none;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 1rem 0.5rem;
    color: hsl(209, 34%, 30%);
    letter-spacing: 0.1rem;
  }
  .sidebar-nav-links a:hover {
    color: black;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    color: hsl(360, 67%, 44%);
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: hsl(360, 71%, 66%);
  }

  .logo {
    justify-self: center;
    height: 7em;
  }

  @media (min-width: 675px) {
    .sidebar {
      display: none;
    }
  }
`;
