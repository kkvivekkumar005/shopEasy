"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error(error);
        setError("Unable to load products");
      });
  }, []);

  return (
    <main>
      <h1>ShopEasy</h1>
      <h2>Products</h2>

      {error && <p>{error}</p>}

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </main>
  );
}
