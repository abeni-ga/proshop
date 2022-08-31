import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.component";
import ProductList from "./pages/Product-List/Product_list.component";
import ProductDetails from "./pages/Product-Details/ProductDetails.component";
import CartScreen from "./pages/cartScreen/cart.screen";
import SignIn from "./pages/signin/signin.page";
import SignUp from "./pages/signup/signup.page";
function App() {
  return (
    <main className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
