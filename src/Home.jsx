import { Link } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  return (
    <Wrapper>
      <div className="home-first">
        <div className="home-first-info">
          <div className="stripes"></div>
          <div className="home-info">
            <h1 className="mini-title">Art Book Bookstore</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              iste, obcaecati at exercitationem suscipit deleniti aut asperiores
              officiis placeat, nobis debitis dolorem nesciunt.
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
  letter-spacing: 0.1rem;
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
    margin-top: 395px;
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
    width: 350px;
    background: hsl(360, 67%, 44%);
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: -75px;
    margin-left: 170px;
    border-color: transparent;
  }

  .home-first button:hover {
    color: #130707;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }

  .mini-title {
    display: none;
  }

  .books-mini {
    display: none;
  }

  @media (max-width: 675px) {
    .stripes {
      display: none;
    }

    .mini-title {
      display: block;
      margin-left: 35%;
      text-align: center;
      color: hsl(360, 67%, 44%);
    }

    .home-first {
      width: 80%;
      display: flex;
      flex-direction: column;
      padding: 5em;
      margin: 0 2em;
    }

    .home-first-info {
      width: 100%;
    }

    .home-info {
      border-radius: 3%;
      background-color: white;
      width: 100%;
      margin-top: 10%;
      margin-left: -4em;
      margin-bottom: -5.5em;
    }

    .home-info h1 {
      margin-bottom: -2em;
    }

    .home-info p {
      text-align: start;
      width: 100%;
    }

    .home-first button {
      display: none;
    }

    .extra-info {
      margin-top: -2em;
      margin-bottom: 3em;
      width: 90%;
      height: 12em;
      padding: 1em;
      border: 5px solid rgb(214, 209, 209);
      border-radius: 3%;
    }

    .extra-info p {
      color: black;
      padding: 0.5em;
    }

    .home-first img {
      width: 98%;
      border-radius: 2%;
      margin-top: 1em;
      margin-left: -6em;
    }
  }
`;
