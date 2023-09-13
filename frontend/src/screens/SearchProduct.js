import React, { useState } from 'react';
import axios from 'axios';
import { Table, Button,Row,Col } from 'react-bootstrap';
import ManageProduct from './ManageProduct'; 
import { PRODUCT_CREATE_RESET } from '../constants/productConst';
import { REGISTER_EVENT_LIST_SUCCESS } from '../constants/resgistertEventConst';
import copy from 'copy-to-clipboard';


const SearchProduct = ({ isAdmin = false, keyword = '' }) => {
  // Your component logic here

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  const createdDate = new Date().toISOString();

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/registarevent/?r_fname=r_fname&r_lname=r_lname', {

        // api/registarevent/?r_fname=r_fname&r_lname=r_lname
        params: {
          r_fname: firstName,
          r_lname: lastName,
        },
      });
      setProducts(response.data.registerevents);
      // console.log(response.data);
      // debugger
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // console.log(response.data);

  const shareProduct = (productId) => {
    // Generate the shareable link based on your app's URL structure
    const shareableLink = `http://localhost:3000/user-event/${productId}`;
  
    // Copy the link to the clipboard
    copy(shareableLink);
  
    // You can also provide feedback to the user that the link has been copied
    alert('Product link copied to clipboard!');
  };
  

  return (
    <div className="container_1054">
<div className="form-horizontal find_registry_wrapper">
  <div className="custom-registry-content">
    <strong className="arimo-bold-28-000" style={{ letterSpacing: '-0.56px' }}>
      Find A Gift Registry
    </strong>
    <p className="arimo-regular-16-222">Enter a first or last name below to quickly locate a registry.</p>
  </div>
  <div className="aaagift-find-form custom-registry-form">
    <div className="one-third-width one-third-width-left mar-bot-10">
      <div className="full-width">
      <input
              type="text"
              placeholder="First Name"
              name="registrant_f_name"
              id="registrant_f_name"
              className="form-control aaa-validate"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
      </div>
    </div>
    <div className="one-third-width-middle one-third-width mar-bot-10">
      <div className="full-width">
      <input
              type="text"
              placeholder="Last Name"
              name="registrant_l_name"
              id="registrant_l_name"
              className="form-control aaa-validate"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
      </div>
    </div>
    <div className="aaagift-find-form custom-registry-button one-third-width-right one-third-width mar-bot-10">
      <div className="form-horizontal">
        <div className="full-width">
          <center>
          <button
                className="btn btn-primary aaa_find_registry"
                style={{ textTransform: 'capitalize', backgroundColor: '#5c90d2' }}
                onClick={handleSearch} // Add onClick event handler
              >
                Find
              </button>

          </center>
        </div>
      </div>
    </div>

   
  </div>
</div>


<table className="table table-bordered searchlist_responsive table_custom">
       <thead className="sm_d_none">
            <tr>
              <th style={{ width: 'auto' }}>S.no</th>
              <th style={{ width: 'auto' }}>Event Id</th>
              <th style={{ width: 'auto' }}>Event Name</th>
              <th style={{ width: '15%' }} className="">
                Event Date
              </th>
              <th style={{ width: '15%' }} className="">
                Create Date
              </th>
              <th style={{ width: '15%' }} className="">
                Owner
              </th>
              <th style={{ width: 'auto' }} className="ifcustomer">
                View
              </th>
              <th style={{ width: 'auto' }} className="ifcustomer">
                Share
              </th>
              
              
            </tr>
          </thead>
          <tbody>         
            {products.length > 0 ? (
            products.map((product, index) => (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{product._id}</td>
            <td>{product.regtype}</td>
            <td>{product.regdate}</td>
            <td>{createdDate}</td>
            <td>{product.r_fname}</td>
            <td> <a href={`user-event/${product._id}`}>view</a></td>
            <td><Button
    variant='primary'
    className='btn-sm'
    onClick={() => shareProduct(product._id)}
  >
    Share
  </Button></td>
                
            </tr>
            ))
            ) : (
            <tr>
            <td colSpan="8">No products found.</td>
            </tr>
            )}
        </tbody>
        </table>
</div>
  );
};

export default SearchProduct;


