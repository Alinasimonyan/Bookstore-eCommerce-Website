import { Link } from "react-router-dom";

const Product = ({ id, title, author, image, price }) => {
  return (
    <div>
      <div className="container">
        <Link to={`/books/${id}`} className="link">
          <img src={image} alt={title} style={{ borderRadius: "5px" }} />
          <div>
            <p>
              {title} by {author}
            </p>
            <p>${price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Product;
