import { Link } from "react-router-dom";
import "./index.css";

const AllProductsSection = (props) => {
  const { details } = props;
  const { id, image, price, rating, title } = details;
  const { rate } = rating;
  return (
    <li className="list-item-c">
      <Link to={`/products/${id}`}>
        <img width="100px" src={image} alt={title} />
        <div>
          <h1>{title}</h1>
          <p>Rs. {price}</p>
          <p>{rate} ratings</p>
        </div>
      </Link>
    </li>
  );
};

export default AllProductsSection;
