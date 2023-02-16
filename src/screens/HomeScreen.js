import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  console.log("products...", products);

  useEffect(() => {
    axios
    .get('http://13.232.44.33/api/products')
    .then((res) => {
        setProducts(res.data)
      })
    .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen