import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productAction'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, error, product } = productDetail

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])
  return (
    <>
      <Link to='/' className='my-3 btn btn-outline-dark rounded'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='info'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>Desription: {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h5>Price: ${product.price}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  Status:{' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
