import React from "react";

const Cart = ({ cart, removeFromCart: handleRemoveFromCart }) => {
  return (
    <div>
      <h2>cart.....................{cart.length}</h2>
      {cart.map((tshirt) => (
        <h6 key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </h6>
      ))}
    </div>
  );
};

export default Cart;
