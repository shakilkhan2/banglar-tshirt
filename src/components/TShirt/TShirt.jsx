import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { name, picture, price, gender } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="t-shirts" />
      <div>
        <h4>{name}</h4>
        <h2>Price: ${price}</h2>
        {/* <h3>Gender: {gender}</h3> */}
      </div>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
