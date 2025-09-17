import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext";

const products = [
  { id: 1, title: "card 1", description: "card 1 desc" },
  { id: 2, title: "card 2", description: "card 2 desc" },
  { id: 3, title: "card 3", description: "card 3 desc" },
  { id: 4, title: "card 4", description: "card 4 desc" },
];

const BuyPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [bought, setBought] = useState(false);

  useEffect(() => {
    if (bought) {
      alert("Product bought successfully!");
      setBought(false); // Reset to allow alert again
    }
  }, [bought]);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
      }}
    >
      <h1>Buy {product.title}</h1>
      <p>{product.description}</p>

      <button
        style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
        onClick={() => setBought(true)}
      >
        Proceed to Payment
      </button>

      <br />

      <button
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default BuyPage;

