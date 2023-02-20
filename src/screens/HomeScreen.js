import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../../src/actions/productActions";
import Product from "../components/Product";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productList = useSelector((state) => state?.productList);
  const { loading, error, products } = productList;
  const keyword = params.keyword


  console.log("products", products);

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
