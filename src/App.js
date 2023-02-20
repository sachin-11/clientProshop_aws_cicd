import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CardScreen from "./screens/CardScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <main  className='py-3'>
          <Container>
            <Routes>
              <Route path="/search/:keyword" element={<HomeScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id?" element={<CardScreen />} />
              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route
                path="/admin/productlist"
                element={<ProductListScreen />}
              />
               <Route
                path="/admin/orderlist"
                element={<OrderListScreen />}
              />
               <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/login/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </Container>
          </main>

          <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
