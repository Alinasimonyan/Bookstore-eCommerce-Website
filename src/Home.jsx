import { Link } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  return (
    <Wrapper>
      <div className="home-first">
        <div className="home-first-info">
          <div className="stripes"></div>
          <div className="home-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              iste, obcaecati at exercitationem suscipit deleniti aut asperiores
              officiis placeat, nobis debitis dolorem nesciunt. Error dicta eos
              amet eius cupiditate quas.
            </p>
          </div>
          <Link to="/books">
            <button>SHOP NOW</button>
          </Link>
          <div className="extra-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              amet ducimus culpa omnis quasi, illo corrupti possimus deserunt.
              Delectus itaque rem totam? Hic corrupti nobis minus omnis illo
              assumenda ipsum!
            </p>
          </div>
        </div>
        <img
          src="https://whatshotblog.com/wp-content/uploads/2020/03/Athenaeum-Bookshop-Amsterdam.jpg"
          alt="bookstore"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .home-first {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    margin-bottom: 100px;
    margin-left: 450px;
    margin-right: 100px;
  }

  .home-first-info {
    margin-top: -30px;
    margin-left: -100px;
    margin-right: 70px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  .home-info {
    border-radius: 50%;
    background-color: black;
    width: 350px;
    height: 350px;
  }

  .home-first img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin-right: 200px;
    margin-left: -250px;
    margin-top: 405px;
  }

  .home-first h1 {
    text-transform: uppercase;
    color: rgb(255, 231, 145);
    font-size: 17px;
    padding: 10px;
    width: 150px;
    border-radius: 5px;
    margin-bottom: -40px;
    width: 250px;
  }

  .home-info p {
    padding-top: 50px;
    margin-left: 80px;
    margin-top: 50px;
    text-align: end;
    width: 200px;
    height: 400px;
    font-size: 20px;
    color: rgb(186, 179, 179);
  }

  .extra-info {
    margin-right: 50px;
    margin-top: 50px;
    width: 200px;
    height: 400px;
  }
  .extra-info p {
    font-size: 20px;
    color: rgb(214, 209, 209);
  }

  .home-first button {
    background: hsl(360, 67%, 44%);
    width: 350px;
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-top: -60px;
    margin-left: 170px;
    border-color: transparent;
  }

  .home-first button:hover {
    color: #130707;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }

  @media (max-width: 675px) {
    .stripes {
      display: none;
    }

    .home-first {
      display: flex;
      flex-direction: column;
      padding: 5em;
      margin: 0 auto;
    }

    .home-info {
      border-radius: 3%;
      background-color: black;
      width: 18.5em;
      height: 350px;
      margin-bottom: 0.5em;
      margin-left: 15px;
    }
    .home-info p {
      text-align: start;
    }
    .home-first button {
      display: none;
    }

    .extra-info {
      width: 16em;
      margin-left: 1em;
      margin-bottom: 0.3em;
      margin-top: 2em;
      padding: 1em;
      height: 18em;
      border: 5px solid rgb(214, 209, 209);
      border-radius: 3%;
    }

    .extra-info p {
      color: black;
      padding: 0.5em;
    }

    .home-first img {
      width: 18.5em;
      height: 20em;
      border-radius: 3%;
      margin-top: 1em;
      margin-left: -5em;
    }
  }
`;
