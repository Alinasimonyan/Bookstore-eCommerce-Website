import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ id, title, author, image, price }) => {
  return (
    <Wrapper>
      <Link to={`/books/${id}`} className="link">
        <img src={image} alt={title} style={{ borderRadius: "5px" }} />
        <div className="book-info">
          <p>
            {title} by {author}
          </p>
          <p>${price}</p>
        </div>
      </Link>
    </Wrapper>
  );
};
export default Product;

const Wrapper = styled.section`
  a {
    text-decoration: none;
    color: black;
    font-size: 14px;
  }
  a:hover {
    color: grey;
  }
  img {
    width: 11em;
    height: 14em;
  }
  .book-info {
    letter-spacing: 0.05rem;
    width: 11em;
    font-size: 0.9rem;
  }
`;
