import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductBasedId } from "../ApiService/apiService";
import { Link, useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  const [productValue, setProductValue] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductBasedId(id);
      setProductValue(response);
    };
    fetchProduct();
  }, [id]);

  const handleBuyNow = () => {
    window.confirm("Item out of Stock!!");
  };
  return (
    <div className="product-details-container">
      <img src={productValue.image} alt="Not Found" className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{productValue.title}</h2>
        <p className="product-description">{productValue.description}</p>
        <p className="product-price">${productValue.price}</p>
        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
        <Link to="/">
          <button className="go-back-btn">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}
