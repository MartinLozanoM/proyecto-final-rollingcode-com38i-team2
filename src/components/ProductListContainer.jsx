import { useState, useEffect } from "react";
import { getData } from "../utils/functions";
import { ProductList } from "./ProductList";
import { API_PRACTICE } from "../utils/constants";
import Products from "./Products";

export const ProductListContainer = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getData(API_PRACTICE.FAKESTOREAPI_PRODUCTS);
      setProducts(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Probando fetch", { products });
  return (
    <main className="gallery-container">
      <div className="container">
        <div>
          <h1>Nuestros Productos</h1>
        </div>
        {products.length === 0 ? (
          <h1>Loanding...</h1>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </main>
  );
};
