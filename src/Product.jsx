import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ id, title, author, image, price }) => {
  return (
    <Wrapper>
      <Link to={`/books/${id}`} className="link">
        <img src={image} alt={title} style={{ borderRadius: "5px" }} />
        <div>
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
    color: brown;
  }
`;
