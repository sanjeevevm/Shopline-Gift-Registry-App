import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../components/Paginate';
import { Table, Button,Row,Col } from 'react-bootstrap';
import{PRODUCT_CREATE_RESET} from '../constants/productConst'
import{REGISTER_EVENT_LIST_SUCCESS} from '../constants/resgistertEventConst'


import { LinkContainer } from 'react-router-bootstrap';
import { updateuserevent} from '../actions/usereventActions';
import { listProducts,deleteProduct,createProduct, updateProduct} from '../actions/productActions';
import { useHistory } from 'react-router-dom';
import { useEventContext } from './EventContext';
import { Card, CardImg } from 'react-bootstrap';




const UsereventScreen = ({location,history}) => {
  const productList = useSelector((state) => state.productList);
  // const { loading, error, products,pages,page } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { loading:loadingDel, error:errorDel, success:successDel } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const { loading:loadingCreate, error:errorCreate, success:successCreate,product:createdProduct } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [registerevent, setRegisterevent] = useState([]);
  const [userevents, setUserevent] = useState([]);
  const dispatch = useDispatch();
  const createdDate = new Date().toISOString();
  const [products, setProducts] = useState([]);
  const eventId = location.pathname.split('/')[2];
  // const history = useHistory();
 console.log(eventId);
 const { setEventId } = useEventContext();

 
  useEffect(() => {
    // dispatch(listProducts())
    axios
    .get(`/api/registarevent/${eventId}`)

    
    .then((res) => {
      
      
      setRegisterevent(res.data)
      const createdDate = new Date().toISOString();
      

    });
    axios
    .get(`/api/userevent?eventid=${eventId}`)

    
    .then((res) => {
      const {userevents, page, pages} = res.data
      
      
      setUserevent(res.data.userevents )
      // console.log(res.data.userevents);
      // debugger
  
      const createdDate = new Date().toISOString();
    });
    
   

    // dispatch({type:PRODUCT_CREATE_RESET})
    //   if(userInfo && userInfo.isAdmin){
    //     dispatch(listProducts('',pageNumber))
    //   }
    //   else{
    //     history.push('/login')
    //   }
    //   if(successCreate){
    //     history.push(`/admin/product/${createdProduct._id}/edit`)
    //   }
  }, []);


const deleteHandler=(id)=>{
  if(window.confirm('Are you sure?')){
    dispatch(deleteProduct(id))
  }
}

const createProductHandler=()=>{
dispatch(createProduct())
}

const updateProductHandler = useCallback( (id) => {
  
  return async (e) => {
    console.log(id);
    console.log(e.target.value);
    /*
    const countInStock = e.target.value;
    e.preventDefault()
    dispatch(updateuserEvent({
        _id:id,
        countInStock
    }));*/

    /** UPDATE API CALL */
   
    
      const config = {
        headers: {
        Authorization:`Bearer ${userInfo.token}`
        },
      }

     

    
    const AppEndPointURL = `/api/userevent/${id}`;
    const commonResponse = fetch(AppEndPointURL, {
        method: "PUT",
        headers:
        {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Allow": "OPTIONS, GET, HEAD, POST",          
          Authorization:`Bearer ${userInfo.token}`
        },
        body: JSON.stringify({
          proid: `${id}`,
          quantity: e.target.value
        }),
    })
    .then((response) => response.json());
    
      //{userevents.map((product, index) => (
      //dispatch(updateuserevent(id, e.target.value)) 
      //))}
  }

}, [])

/*const updateProductHandler=(a, pid, c)=> {
  console.log("e.target.value");
  console.log(1);
  console.log("pid = ");
  console.log(pid);
  console.log(c);
  
  {userevents.map((product, index) => (
    dispatch(updateuserevent(product, e.target.value)) 
  ))}
  
  
  }*/


const handleAddProductsClick = () => {
  setEventId(eventId);
  // Navigate to the homepage
  history.push('/');
};
    
    return (
     
        <div className="aaagift-manage-regi">
      <div className="full-width" style={{ textAlign: 'center' }}>
        <h3 className="block-title">{registerevent.regtitle}</h3>
        <p>{registerevent.regmessage}</p>
      </div>

      <div> 
       <table className="table table-bordered searchlist_responsive table_custom">
       <thead className="sm_d_none">
            <tr>
              <th style={{ width: 'auto' }}>NAME OF THE EVENT</th>
              <th style={{ width: 'auto' }}>RECORD OWNER</th>
              <th style={{ width: 'auto' }}>CREATION DATE</th>
              <th style={{ width: 'auto' }} className="">
              EVENT DATE
              </th>
              <th style={{ width: 'auto' }} className="">
              ADDITIONAL INFORMATION
              </th>
            </tr>
          </thead>
          <tbody>
              
          <td>{registerevent.regtype}</td>
          <td>{registerevent.r_fname}</td>
          <td>{createdDate}</td>
          <td>{registerevent.regdate}</td>
          <td>{registerevent.regaddinfo}</td>
            

          
             

        </tbody>
          </table>
     
      <form id="aaa-registry-products-form">
        <div className="table-responsive sm_border_none">
          <table className="table table-bordered table_custom registry_products_table_responsive">
          <thead>
            <tr>
              <th>YES NO</th>
              <th>PRODUCT NAME</th>
              <th>SKU</th>
              <th>PRODUCT IMAGE</th>
              <th>PRICE</th>
              <th>NO. OF ITEMS</th>
              <th>PURCHASED ITEMS </th>
              <th>QUANTITY AVAILABLE</th>      
              <th>ADD TO CART<span>(*Add the number of products to buy and update the cart)</span></th>           
            </tr>
          </thead>
            <tbody>
            {userevents.map((product, index) => (
                <tr key={index}>
                {/* Populate the table cells with the registry data */}
                <td>{index + 1}</td>
                <td>{product.regproductname}</td>
                <td>{createdDate}</td>
                <td><CardImg src={product.regproductimage} style={{height:'150px'}} /></td>
                <td>{product.regproductprice}</td>
                <td>{product.quantity}</td>
                <td>10000</td>
                <td>{product.available_quantity}</td>
                <td><input type='number' defaultValue={0} onChange={updateProductHandler(product._id)}  min={0} max={product.available_quantity}/></td>               
              </tr>
            ))}           
          </tbody>
          </table>
        </div>
        {/* first time when user submit form then this button will desplay */}
        <div className="full-width">
          <button className="btn btn-primary" onClick={handleAddProductsClick}>
            Add products in the registry
          </button>

          <button className="btn btn-danger" onClick={updateProductHandler} >
            Add 
          </button>
        </div>

        <div className="full-width update_cart_bottom_fix" style={{ borderRadius: '0 !important', textAlign: 'center' }}>
          <div className="btn_wrapper">
           
          </div>
          {/* ... */}
          {/* Rest of the content */}
          {/* ... */}
        </div>
      </form>
    </div>
    </div>
    );
  };
  
  export default UsereventScreen;