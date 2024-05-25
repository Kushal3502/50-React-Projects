import React, { useEffect, useState } from "react";
import "./style.css";

function LoadMore() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      console.log(result.products);
      setProducts((prevData) => {
        const newProducts = result.products.filter(
          (newProduct) =>
            !prevData.some((product) => product.id === newProduct.id)
        );
        return [...prevData, ...newProducts];
      });
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length == 100) setIsDisabled(true);
  }, [products]);

  if (loader) return <div>Just a moment...</div>;

  return (
    <div className="container">
      <div className="product-container">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button disabled={isDisabled} onClick={() => setCount(count + 1)}>
          Load More
        </button>
        {isDisabled ? (
          <span className="message">You reached 100 products</span>
        ) : null}
      </div>
    </div>
  );
}

export default LoadMore;
