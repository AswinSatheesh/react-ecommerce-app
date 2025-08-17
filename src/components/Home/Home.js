import React, { useEffect, useState } from "react";
import "./Home.css";
import { getAllProducts } from "../ApiService/apiService";
import { Link } from "react-router-dom";
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApiDetails = async () => {
      const data = await getAllProducts();
      console.log("Data from api : ", data);
      setProducts(data);
    };
    // const fetchApiDetails = () => {
    //   getAllProducts().then((data) => {
    //     console.log(data, "Alternative solution");
    //   });
    // };
    fetchApiDetails();
  }, []);
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt="Not Loaded" />
          <h2>{product.title}</h2>
          <p>
            <span className="price">${product.price}</span>
          </p>
          <Link to={`/product-details/${product.id}`}>
            <button>Product Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
