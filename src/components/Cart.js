
import React from "react";

function Cart({ cart, dispatch }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE_QUANTITY",
                  payload: item.id
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item.id
                })
              }
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item.id
                })
              }
            >
              Remove
            </button>

            <hr />
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default Cart;
