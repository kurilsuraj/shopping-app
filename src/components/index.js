import { Link } from "react-router-dom";
import "./index.css";

const AllProductsSection = (props) => {
  const { details } = props;
  const { id, image, price, rating, title } = details;

  const { rate, count } = rating;
  return (
    <li className="list-item-c">
      <Link className="link-items" to={`/products/${id}`}>
        <div>
          <img width="100px" src={image} alt={title} />
        </div>

        <div className="product-name-rate-price-container">
          <h1 className="heading-title">{title}</h1>
          <p>Rs. {price}</p>
          <div className="rating-container">
            <img
              className="rating-star-img"
              src="https://res.cloudinary.com/dcqsyb9d7/image/upload/v1708427789/tastyKitchensApp/xj6b5xzkxiuac26bzryq.png"
              alt="stars"
            />
            <p>
              {rate} ({count})
            </p>
          </div>
        </div>
      </Link>
      <hr className="horizontal-line" />
    </li>
  );
};

export default AllProductsSection;
