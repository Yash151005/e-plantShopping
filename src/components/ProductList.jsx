import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = {
  "Indoor Plants": [
    { id:1,name:"Snake Plant",price:10,img:"https://via.placeholder.com/150"},
    { id:2,name:"Peace Lily",price:12,img:"https://via.placeholder.com/150"},
    { id:3,name:"Spider Plant",price:8,img:"https://via.placeholder.com/150"},
    { id:4,name:"Rubber Plant",price:15,img:"https://via.placeholder.com/150"},
    { id:5,name:"Pothos",price:9,img:"https://via.placeholder.com/150"},
    { id:6,name:"ZZ Plant",price:14,img:"https://via.placeholder.com/150"}
  ],

  "Succulents": [
    { id:7,name:"Aloe Vera",price:6,img:"https://via.placeholder.com/150"},
    { id:8,name:"Jade Plant",price:7,img:"https://via.placeholder.com/150"},
    { id:9,name:"Echeveria",price:5,img:"https://via.placeholder.com/150"},
    { id:10,name:"Sedum",price:6,img:"https://via.placeholder.com/150"},
    { id:11,name:"Haworthia",price:7,img:"https://via.placeholder.com/150"},
    { id:12,name:"Kalanchoe",price:8,img:"https://via.placeholder.com/150"}
  ],

  "Outdoor Plants": [
    { id:13,name:"Rose",price:10,img:"https://via.placeholder.com/150"},
    { id:14,name:"Tulip",price:12,img:"https://via.placeholder.com/150"},
    { id:15,name:"Lavender",price:11,img:"https://via.placeholder.com/150"},
    { id:16,name:"Sunflower",price:9,img:"https://via.placeholder.com/150"},
    { id:17,name:"Daisy",price:7,img:"https://via.placeholder.com/150"},
    { id:18,name:"Hibiscus",price:8,img:"https://via.placeholder.com/150"}
  ]
};

function ProductList() {

  const dispatch = useDispatch();

  const [addedToCart,setAddedToCart] = useState({});
  const [cartCount,setCartCount] = useState(0);

  const addToCart = (plant) => {

    dispatch(addItem(plant));

    setAddedToCart({
      ...addedToCart,
      [plant.name]: true
    });

    setCartCount(cartCount + 1);
  };

  return (
    <div>

      <Navbar cartCount={cartCount}/>

      {Object.keys(plants).map((category) => (

        <div key={category}>

          <h2>{category}</h2>

          <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>

            {plants[category].map((plant) => (

              <div key={plant.id}>

                <img src={plant.img} width="150"/>

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  disabled={addedToCart[plant.name]}
                  onClick={()=>addToCart(plant)}
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
