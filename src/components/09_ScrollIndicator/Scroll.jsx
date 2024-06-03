import React, { useEffect, useState } from "react";
import "./scroll.css";

function Scroll({ url, limit }) {
  const [products, setProducts] = useState([]);
  const [scroll, setScroll] = useState(0);

  async function fetchProducts(url) {
    try {
      const response = await fetch(`${url}?limit=${limit}`);
      const result = await response.json();
      console.log(result.products);
      if (result && result.products.length > 0) setProducts(result.products);
    } catch (error) {
      console.log(error);
    }
  }

  function handleScroll() {
    const totalHeight = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((totalHeight / scrollHeight) * 100);
  }

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${scroll}%` }}></div>
        </div>
      </div>
      <ul className="products-container">
        {products && products.length > 0
          ? products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
    </div>
  );
}

export default Scroll;
