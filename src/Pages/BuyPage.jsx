import React from "react"
import { useParams } from "react-router-dom"

const products = [
  { id: 1, title: "card 1", description: "card 1 desc" },
  { id: 2, title: "card 2", description: "card 2 desc" },
  { id: 3, title: "card 3", description: "card 3 desc" },
  { id: 4, title: "card 4", description: "card 4 desc" },
]

const BuyPage = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Buy {product.title}</h1>
      <p>{product.description}</p>
      <button style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}>
        Proceed to Payment
      </button>
    </div>
  )
}

export default BuyPage
