import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CardScreen from "./screens/CardScreen";
import LoginScreen from "./screens/LoginScreen";
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
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
        </Container>
        
        <Footer />
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
