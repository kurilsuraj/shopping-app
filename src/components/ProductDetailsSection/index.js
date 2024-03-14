import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import Header from "../Header";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const ProductsDetailsSection = () => {
  const { id } = useParams();
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [productsData, setData] = useState([]);
  useEffect(() => {
    const getProductDetails = async () => {
      setApiStatus(apiStatusConstants.inProgress);

      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setData(data);
        setApiStatus(apiStatusConstants.success);
      } else {
        setApiStatus(apiStatusConstants.failure);
      }
    };
    getProductDetails();
  }, [id]);

  const renderLoadingView = () => (
    <div className="products-loader-container">
      <Circles type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  );

  const renderFailureView = () => (
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

  const renderSuccessView = () => (
    <div className="products-details-container">
      <img
        className="product-details-img"
        src={productsData.image}
        alt={productsData.title}
      />
      <hr width="100%" />
      <h1 className="heading-title">{productsData.title}</h1>
      <p>{productsData.description}</p>
      <p>{productsData.category}</p>
      <p>Rs. {productsData.price}</p>
      <div className="rating-container">
        <img
          className="rating-star-img"
          src="https://res.cloudinary.com/dcqsyb9d7/image/upload/v1708427789/tastyKitchensApp/xj6b5xzkxiuac26bzryq.png"
          alt="stars"
        />
        <p>
          {productsData.rating.rate} ({productsData.rating.count})
        </p>
      </div>
    </div>
  );

  const renderConditionalView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      {renderConditionalView()}
    </>
  );
};

export default ProductsDetailsSection;
