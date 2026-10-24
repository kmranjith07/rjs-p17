
import React from "react";

function ProductList({ products, dispatch }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
