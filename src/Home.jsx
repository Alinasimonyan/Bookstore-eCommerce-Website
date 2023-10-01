import styled from "styled-components";
import { Events } from "./Events";

export const Home = () => {
  return (
    <div>
      <div className="home-first">
        <div className="home-first-info">
          <h1>Art Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            iste, obcaecati at exercitationem suscipit deleniti aut asperiores
            officiis placeat, nobis debitis dolorem nesciunt. Error dicta eos
            amet eius cupiditate quas.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dignissimos nisi unde voluptate quisquam reiciendis eaque dolores
            quod perferendis!
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="home-first-img">
          <img
            src="https://whatshotblog.com/wp-content/uploads/2020/03/Athenaeum-Bookshop-Amsterdam.jpg"
            alt="bookstore"
          />
        </div>
      </div>
      <Events />
    </div>
  );
};
