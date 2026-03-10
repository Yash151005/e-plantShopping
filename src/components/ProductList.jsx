import React, { useState } from "react";
import Navbar from "./Navbar";

const plants = {
  Indoor: [
    { name: "Snake Plant", price: 10, img: "https://via.placeholder.com/150" },
    { name: "Peace Lily", price: 12, img: "https://via.placeholder.com/150" },
    { name: "Spider Plant", price: 8, img: "https://via.placeholder.com/150" },
    { name: "ZZ Plant", price: 15, img: "https://via.placeholder.com/150" },
    { name: "Pothos", price: 9, img: "https://via.placeholder.com/150" },
    { name: "Rubber Plant", price: 14, img: "https://via.placeholder.com/150" }
  ],

  Succulents: [
    { name: "Aloe Vera", price: 6, img: "https://via.placeholder.com/150" },
    { name: "Jade Plant", price: 7, img: "https://via.placeholder.com/150" },
    { name: "Echeveria", price: 5, img: "https://via.placeholder.com/150" },
    { name: "Haworthia", price: 6, img: "https://via.placeholder.com/150" },
    { name: "Sedum", price: 7, img: "https://via.placeholder.com/150" },
    { name: "Kalanchoe", price: 8, img: "https://via.placeholder.com/150" }
  ],

  Outdoor: [
    { name: "Rose", price: 10, img: "https://via.placeholder.com/150" },
    { name: "Tulip", price: 12, img: "https://via.placeholder.com/150" },
    { name: "Lavender", price: 11, img: "https://via.placeholder.com/150" },
    { name: "Hibiscus", price: 9, img: "https://via.placeholder.com/150" },
    { name: "Daisy", price: 7, img: "https://via.placeholder.com/150" },
    { name: "Sunflower", price: 8, img: "https://via.placeholder.com/150" }
  ]
};

function ProductList() {

  const [addedToCart, setAddedToCart] = useState({});
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (plant) => {
    setAddedToCart({ ...addedToCart, [plant.name]: true });
    setCartCount(cartCount + 1);
  };

  return (
    <div>

      <Navbar cartCount={cartCount} />

      {Object.keys(plants).map((category) => (
        <div key={category}>

          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

            {plants[category].map((plant) => (
              <div key={plant.name}>

                <img src={plant.img} width="150" />

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  disabled={addedToCart[plant.name]}
                  onClick={() => addToCart(plant)}
                >
                  {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                </button>

              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}

export default ProductList;
