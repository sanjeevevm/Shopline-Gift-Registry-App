import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating'
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useEventContext } from '../screens/EventContext';
import { useDispatch} from 'react-redux';
import axios from 'axios'
export const addProduct = (eventid, productid, productname, productimage, productprice) =>   (dispatch,getState) => {
  try {
    // dispatch({
    //   type: PRODUCT_CREATE_REQUEST,
    // });
   
    const {userLogin:{userInfo}}=getState()
    console.log("++++++"+userInfo.token+"+++______")
    console.log(eventid, productid)
    
    const config = {
      headers: {
      Authorization:`Bearer ${userInfo.token}`
      },
    }

    const headers= {
      Authorization:`Bearer ${userInfo.token}`
    }
    console.log("before post")
   
    const{data}=  axios.post(
      `/api/userevent/`,{eventid:eventid,regproducturl:productid,regproductname:productname,regproductimage:productimage,regproductprice:productprice}, config
    ).then(response => {
      alert('Product added to gift registry');
  });
  
    dispatch({
      type: 'PRODUCT_CREATE_SUCCESS',
      payload: { data: data, productName: productname, productImage: productimage, productPrice: productprice },
    });

  } catch (error) {
    console.log("error+++++++++++")
    dispatch({
        type: 'PRODUCT_CREATE_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
  }
  
};



const Product = ({ product })  => {
  const dispatch = useDispatch();
  const { eventId } = useEventContext();
  console.log("**********************************"+eventId)

  const submitHandler = (e, pid, pname, pimage, pprice) => {
    
    if (eventId === null){

     
    }
    else{
    
      dispatch(addProduct(eventId, pid, pname, pimage, pprice))
    };
  };
  return (
    <Card className='h-90 my-4 p-2'>
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} style={{height:'260px'}} />
      </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`}>
          <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
      </Link>
      <Card.Text as='div'>
       <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>
      <Card.Text as='h3'>${product.price}</Card.Text>
      {eventId !== null ? (
          <Button
            onClick={(e) => submitHandler(e, product._id, product.name, product.image, product.price)}
            className='btn-block'
            type='button'
          >
            Create gift table
          </Button>
        ) : (
          <p></p>
        )}
    
    
      </Card.Body>
    </Card>
  )
};

export default Product;
