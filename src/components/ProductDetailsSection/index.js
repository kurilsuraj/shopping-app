import { Component } from "react";

class ProductsDetailsSection extends Component {
  componentDidMount() {
    this.getProductDetails();
  }
  getProductDetails = async () => {
    const { match } = this.props;
    const id = match.params.id;

    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default ProductsDetailsSection;
