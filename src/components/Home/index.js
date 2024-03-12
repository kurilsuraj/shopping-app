import { Component } from "react";
import { Circles } from "react-loader-spinner";

import "./index.css";
import Header from "../Header";
import AllProductsSection from "..";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Home extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
  };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({
        productsList: data,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Circles type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  );

  renderSuccessView = () => {
    const { productsList } = this.state;
    return (
      <div>
        <ul>
          {productsList.map((each) => (
            <AllProductsSection key={each.id} details={each} />
          ))}
        </ul>
      </div>
    );
  };

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  getConditionalRendering = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();

      default:
        return null;
    }
  };
  render() {
    const { productsList } = this.state;
    console.log(productsList);

    return (
      <div>
        <Header />
        {this.getConditionalRendering()}
      </div>
    );
  }
}

export default Home;
