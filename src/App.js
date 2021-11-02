import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AuthProvider from "./store/AuthProvider";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <Header />
        <main>
          <Meals />
        </main>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
