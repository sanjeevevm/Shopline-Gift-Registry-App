import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap';
import { addToCart,removeFromCart } from '../actions/cartActions';
import{CART_RESET_SHIPPING_ADDRESS} from '../constants/cartConst'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
        dispatch(addToCart(productId, qty));
    }
}, [dispatch, productId, qty]);

const removeCartHandler=(id)=>{
    dispatch(removeFromCart(id))
}

const checkoutHandler=()=>{
      dispatch({type:CART_RESET_SHIPPING_ADDRESS})
      history.push('/login?redirect=shipping')
  }
  return (
    <Row>
      <Col md={8}>
    <h1>Shopping cart</h1>
    {cartItems.length===0?<Message>Cart is empty <Link to='/'>Go back</Link></Message>:(
    <ListGroup variant='flush'>
    {cartItems.map(item=>(
    <ListGroupItem key={item.product}>
        <Row>
            <Col md={2}>
                <Image src={item.image} alt={item.name} fluid rounded/>
            </Col>
            <Col md={3}>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
            </Col>
            <Col md={2}>
                ${item.price}
            </Col>
            <Col md={2}>
            <FormControl as='select' value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                             {
                             [...Array(item.countInStock).keys()].map(x=>(
                                 <option key={x+1} value={x+1}>
                                     {x+1}
                                 </option>
                             ))
}
                         </FormControl>
            </Col>
            <Col md={2}>
                <Button type='button' variant='light' onClick={()=>removeCartHandler(item.product)}>
                    <i className='fas fa-trash'></i>
                </Button>
            </Col>
        </Row>

    </ListGroupItem>
))}
    </ListGroup>
)}
      </Col>
      <Col md={4}>
<Card>
    <ListGroup variant='flush'>
        <ListGroupItem>
            <h2>Subtotal ({cartItems.reduce((acc,cur)=>acc+cur.qty,0)})items</h2>
            ${cartItems.reduce((acc,cur)=>acc+cur.qty*cur.price,0).toFixed(2)}
        </ListGroupItem>
        <ListGroupItem>
            <Button type='button' className='btn-block' disabled={cartItems.length===0}onClick={checkoutHandler}>
                Proceed to checkout
            </Button>
        </ListGroupItem>
    </ListGroup>
</Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
