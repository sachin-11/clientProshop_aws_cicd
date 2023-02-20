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
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'

//admin
import UserListScreen from "./screens/UserListScreen";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <main>
        <Header />
        <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CardScreen />} />
          <Route path="/admin/userlist" element= {<UserListScreen />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="/login/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
        </Container>
        
        <Footer />
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
