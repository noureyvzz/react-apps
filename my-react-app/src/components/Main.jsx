import React from "react";
import products from "../data/products";

const Main = () => {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Name: {product.name}</p>
            <p>Sale Price: ${product.calculateDiscountedPrice().toFixed(2)}</p>
            <p>Profit: ${product.calculateProfit().toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;