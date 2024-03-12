import { Component } from "react";

class ProductsDetailsSection extends Component {
  state = {
    productsDetails: {},
  };
  componentDidMount() {
    this.getProductDetails();
  }
  getProductDetails = async () => {
    const { match } = this.props;
    const id = match.params.id;

    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ productsDetails: data });
  };

  render() {
    const { productsDetails } = this.state;
    const {
      image,
      title,
      description,
      category,
      price,
      rating,
    } = productsDetails;
    const { rate, count } = rating;
    return (
      <div>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{category}</p>
        <p>Rs. {price}</p>
        <p>{rate}</p>
        <p>Total Rating {count}</p>
      </div>
    );
  }
}

export default ProductsDetailsSection;
