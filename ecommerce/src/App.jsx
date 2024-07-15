import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopHome from "./pages/ShopHomePage";
import ShopCategory from "./pages/shopcategory/ShopCategory";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import LoginSignup from "./pages/login_signup/LoginSignup";
import ProductPage from "./pages/productpage/ProductPage";
import wcimg from "./assets/wc4.jpg";
import menbn from "./assets/menbn3.jpg";
import useScrollToTop from "./hooks/scrollup";
import CartPage from "./pages/cartpage/CartPage";

const App = () => {
  useScrollToTop();
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<ShopHome />} />
        <Route
          path="/men"
          element={<ShopCategory image={menbn} pageCat="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory image={wcimg} pageCat="women" />}
        />
        <Route
          path="/kid"
          element={<ShopCategory image={wcimg} pageCat="boy" />}
        />
        <Route
          path="/dresses"
          element={<ShopCategory image={wcimg} pageCat="dresses" />}
        />
        <Route
          path="/sneaker"
          element={<ShopCategory image={wcimg} />}
          pageCat="sneakers"
        />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
