




import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../components/Paginate';
import { Table, Button,Row,Col } from 'react-bootstrap';
import{PRODUCT_CREATE_RESET} from '../constants/productConst'
import{REGISTER_EVENT_LIST_SUCCESS} from '../constants/resgistertEventConst'
import { LinkContainer } from 'react-router-bootstrap';



const registereventListScreen = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
 
 
  useEffect(() => {
    axios
    .get(`/api/registarevent/?pageNumber=1`)
    .then((res) => {
      const {registerevents, page, pages} = res.data
      
      setProducts(res.data.registerevents )
      console.log('Log this'+products+"++dddddddddddddddddd+"+page+"///"+pages);
      console.log('1111Log this'+res+"+++"+"]]]]]]]]]]]]"+res.data);
    });
    
    console.log('Log this'+products+"+++");
  }, []);

  return (
    <div> 
       <table className="table table-bordered searchlist_responsive table_custom">
          <thead className="sm_d_none">
            <tr>
            <th> </th>
            </tr>
          </thead>
          <tbody>
              
              {products.map((product) => (
                <tr>
                {/* Populate the table cells with the registry data */}
              
                <td>{product.eventId}</td>
                <td>{product.eventName}</td>
                <td>{product.eventDate}</td>
                <td>{product.r_email}</td>
                <td>{product.r_address}</td>
                {/* Add more columns for View, Share, Edit, Edit Registry Product */}
              </tr>
              ))}
        </tbody>
        </table>
    </div>
  );
}

export default registereventListScreen;




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
              <th style={{ width: 'auto' }} className="ifcustomer">
                Edit
              </th>
              <th style={{ width: 'auto' }} className="ifcustomer">
                Edit Registry Product
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10" style={{ textAlign: 'center' }} className="text-14-D20E0E no_reg_found @K">
                No Registry Found
                <div style={{ marginTop: '15px', marginBottom: '24px' }}>
                  <a href="#" className="aaa-gift-create create_registry_btn">
                    <span style={{ fontSize: '24px', position: 'relative', top: '2px' }}>+</span> Create New Registry
                  </a>
                </div>
              </td>
            </tr>




            {formDataData.length === 0 ? (
              <tr>
                <td colSpan="10" style={{ textAlign: 'center' }} className="text-14-D20E0E no_reg_found @K">
                  No Registry Found
                  <div style={{ marginTop: '15px', marginBottom: '24px' }}>
                    <a href="#" className="aaa-gift-create create_registry_btn">
                      <span style={{ fontSize: '24px', position: 'relative', top: '2px' }}>+</span> Create New Registry
                    </a>
                  </div>
                </td>
              </tr>
            ) : (
              registryData.map((registry, index) => (
                <tr key={index}>
                  {/* Populate the table cells with the registry data */}
                  <td>{index + 1}</td>
                  <td>{registry.eventId}</td>
                  <td>{registry.eventName}</td>
                  <td>{registry.eventDate}</td>
                  <td>{registry.createDate}</td>
                  <td>{registry.owner}</td>
                  {/* Add more columns for View, Share, Edit, Edit Registry Product */}
                </tr>
              ))
            )}







          </tbody>
        </table>