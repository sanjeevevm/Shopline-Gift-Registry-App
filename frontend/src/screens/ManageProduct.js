import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../components/Paginate';
import { Table, Button,Row,Col } from 'react-bootstrap';
import{PRODUCT_CREATE_RESET} from '../constants/productConst'
import{REGISTER_EVENT_LIST_SUCCESS} from '../constants/resgistertEventConst'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
// import User from '../../../backend/models/userModel';
import { listregisterevents,deleteregisterevent,createregisterevent } from '../actions/registereventActions';
import copy from 'copy-to-clipboard';

const registereventListScreen = ({isAdmin=false,keyword=''}) => {
  // const pageSize=8
  // const page=Number(query.pageNumber) || 1
  // const pageNumber=match.params.pageNumber || 1
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const createdDate = new Date().toISOString();  
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
 
  // const { pages,page } = res.data;
  useEffect(() => {
    axios
    .get(`/api/registarevent/?pageNumber=`+pages)
    .then((res) => {
      const {registerevents, page, pages} = res.data      
      setProducts(res.data.registerevents)
      //console.log('Log this'+products+"++dddddddddddddddddd+"+page+"///"+pages);
      //console.log('1111Log this'+res+"+++"+"]]]]]]]]]]]]"+res.data.registerevents);
      const createdDate = new Date().toISOString();
      //console.log(pages);
      //console.log(page);
    });
    fetchProducts(page);    
    //console.log('Log this'+products+"+++");
  }, [page]);

  const fetchProducts = async (pageNumber) => {
    try {
      const response = await axios.get(`/api/registarevent/?pageNumber=${pageNumber}&limit=5`);
      const { registerevents, page, pages } = response.data;
      setProducts(registerevents);
      setPage(page);
      setPages(pages);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const config = {
    headers: {
    Authorization:`Bearer ${userInfo.token}`
    },  }

    
    const deleteHandler = async (id) => {
      if (window.confirm('Are you sure?')) {
        const AppEndPointURL = `/api/registarevent/${id}`;
        try {
          // Delete the product using axios
          await axios.delete(AppEndPointURL, config);
  
          // Fetch updated products after successful deletion
          const response = await axios.get(`/api/registarevent/?pageNumber=${page}&limit=5`);
          const { registerevents, pages } = response.data;
          setProducts(registerevents);
          setPages(pages);
          alert('Registry successfully deleted');
          
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      }
      
    };

    const shareProduct = (productId) => {
      // Generate the shareable link based on your app's URL structure
      const shareableLink = `http://localhost:3000/user-event/${productId}`;
    
      // Copy the link to the clipboard
      copy(shareableLink);
    
      // You can also provide feedback to the user that the link has been copied
      alert('Product link copied to clipboard!');
    };
    

  return (
    <div> 
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
              <th style={{ width: '15%' }} className="">
                Share
              </th>
              <th style={{ width: 'auto' }} className="ifcustomer">
                View
              </th>
              <th style={{ width: 'auto' }} className="ifcustomer">
                Edit
              </th>
              <th style={{ width: 'auto' }} className="ifcustomer">
                Delete
              </th>
             
            </tr>
          </thead>
          <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="8">
                <p>No registries found.</p>
                <Link to="/create-registry" onClick={() => handleTabClick(1)}>Create a new registry</Link>
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr key={index}>
                {/* Populate the table cells with the registry data */}
                {/* Populate the table cells with the registry data */}
                <td>{index + 1}</td>
                <td>{product._id}</td>
                <td>{product.regtype}</td>
                <td>{product.regdate}</td>
                <td>{createdDate}</td>
                {/* <td>{new Date(product.createDate).toLocaleDateString()}</td> Display the formatted creation date */}
                <td>{product.r_fname}</td>

                <td><Button
    variant='primary'
    className='btn-sm'
    onClick={() => shareProduct(product._id)}
  >
    Share
  </Button></td>
                <td><a href={`user-event/${product._id}`}>view</a></td>
                <td><Link to={`/admin/editRegistry/${product._id}`}>Edit</Link></td>
                {/* Add more columns for View, Share, Edit, Edit Registry Product */}
                <td><Button variant='danger' className='btn-sm' onClick={()=>deleteHandler(product._id)}>
                <i className='fas fa-trash'></i>
                </Button></td>
              </tr>
            ))
          )}

          </tbody>



          </table>
          <Pagination>
            {[...Array(pages).keys()].map((x) => (
              <Pagination.Item
                key={x + 1}
                active={x + 1 === page}
                onClick={() => handlePageChange(x + 1)}
              >
                {x + 1}
              </Pagination.Item>
            ))}
          </Pagination>





          
        
    
    </div>
  );
}

export default registereventListScreen;

