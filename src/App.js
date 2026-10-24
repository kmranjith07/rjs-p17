
import React, { useReducer } from "react";
import cartReducer from "./reducer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500
  }
];

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      <h2>Products</h2>
      <ProductList
        products={products}
        dispatch={dispatch}
      />

      <h2>Your Cart</h2>
      <Cart
        cart={cart}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
