import React from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor Plants" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering Plants" }
];

function ProductList() {
  return (
    <div>
      <h2>Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}

    </div>
  );
}

export default ProductList;