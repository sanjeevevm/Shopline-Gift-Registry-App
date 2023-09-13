import React, { useState } from "react";
import axios from "axios";
// import { createProduct } from '../actions/productActions';
import { createregisterevent } from '../actions/registereventActions';

import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const CreateRegistryForm = () => {
  const [formData, setFormData] = useState({
    regtitle: '',
    regdate: '',
    regmessage: '',
    regaddinfo: '',
    regtype: '',
    r_title: '',
    r_fname: '',
    r_lname: '',
    r_email: '',
    r_phone: '',
    r_address: '',
    r_city: '',
    r_state: '',
    r_country: '',
    r_zip: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
 
  // const baseURL = "https://jsonplaceholder.typicode.com/posts";
    // const baseURL = "/api/products/";
    


    
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    
    //   // You can adjust the headers as needed, including any authorization headers
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   };
    
    //   try {
    //     // Make the POST request to your backend API endpoint
    //     const response = await axios.post('/api/products/', formData, config);
    
    //     // Handle the response data
    //     console.log('Response:', response.data);
    
    //     // You can dispatch any action here if needed
    //     // dispatch(yourAction(response.data));
    //   } catch (error) {
    //     // Handle errors
    //     console.error('Error sending POST request:', error);
    //   }
    // };
    

    

    const handleSubmit =  (e)  => {
      
      e.preventDefault();
      
      // const [items, setItems] = useState([]);
      // const userinfo = JSON.parse(localStorage.getItem('userinfo'));  
      // const {userLogin:{userInfo}}=getState()
      console.log(formData);
      dispatch(createregisterevent(formData))
      alert('Registry successfully created');

    
     
     


      
      // const config = {
      //   headers: {
      //   Authorization:`Bearer ${userInfo.token}`
      //   },
      // }

      // try {
      //   const url = '/api/products/'; // Replace with your actual API endpoint
      //   const response = axios.post(url, formData,config);
  
      //   // Handle the response here
      //   console.log('Response:', response.data);
      // } catch (error) {
      //   console.error('Error sending POST request:', error);
      // }
    };


    // const handleSubmit = () => {
    //   // Assuming you have the formData variable containing your form data
    //   // Console.log to see the content in the browser's console
    //   console.log(formData);
    
    //   // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual API endpoint in your backend
    //   const backendApiEndpoint = 'http://localhost:5000';
    
    //   // Make the POST request to your backend using Axios
    //   axios.post(backendApiEndpoint, formData)
    //     .then((response) => {
    //       // Handle the response from the backend if needed
    //       console.log('Response from backend:', response.data);
    //     })
    //     .catch((error) => {
    //       // Handle any errors that occur during the POST request
    //       console.error('Error sending POST request:', error);
    //     });
    // };

    
    

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('rama');
  //   debugger
  //   console.log("))))))))"+process.env.JWT_SECRET)
  //   dispatch(createProduct())
    
    // axios
    // .post(baseURL, formData)
    // .then((response) => {
    // //   setPost(response.data);
    //   console.log("+++++++++++++++++++++")
    // });
    // Handle form s0ubmission here (e.g., send data to a server)
    // console.log(formData);
  // };
  return (
    <>
      <div className='create-registry-wr'>
        <h2>Create New Registry</h2>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit}>
            <h4>Registry Profile</h4>
            <div className='form-fields'>

            <div className='form-control half-width display_none' >
            <label>E *</label>
            <input ttype='text' name="regcreateddate" Value={formData.regcreateddate} />
            {/* {new Date().toLocaleDateString('en-US')} */}
            </div>
            {/* <td>{new Date(registry.createDate).toLocaleDateString('en-US')}</td> */}

              <div className='form-control half-width'>
                <label>REGISTRY TITLE *</label>
                <input type='text' name='regtitle'  value={formData.regtitle} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>EVENT DATE *</label>
                <input type='date' name='regdate' value={formData.regdate} onChange={handleChange} />
              </div>
              <div className='form-control'>
                <label>PUBLIC MESSAGE TO FRIENDS AND FAMILY *</label>
                <input type='text' name='regmessage' value={formData.regmessage} onChange={handleChange} />
              </div>
              <div className='form-control'>
                <label>ADD ADDITIONAL INFO</label>
                <input type='text' name='regaddinfo' value={formData.regaddinfo} onChange={handleChange} />
              </div>
              <div className='form-control'>
                <label>TYPE OF EVENT</label>
                <select name="regtype" value={formData.regtype} onChange={handleChange} >
                  <option value="Baby">Baby</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Christmas">Christmas</option>
                  <option value="Holiday">Holiday</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <h4>Registrant Information</h4>
            <div className='form-fields'>
              <div className='form-control'>
                <label>TITLE *</label>
                <input type='text' name='r_title' value={formData.r_title} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>FIRST NAME *</label>
                <input type='text' name='r_fname' value={formData.r_fname} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>LAST NAME *</label>
                <input type='text' name='r_lname' value={formData.r_lname} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>EMAIL *</label>
                <input type='email' name='r_email' value={formData.r_email} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>PHONE *</label>
                <input type='tel' name='r_phone' value={formData.r_phone} onChange={handleChange} />
              </div>
            </div>
            <h4>Shipping Information</h4>
            <div className='form-fields'>
              <div className='form-control'>
                <label>ADDRESS *</label>
                <input type='text' name='r_address' value={formData.r_address} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>CITY *</label>
                <input type='text' name='r_city' value={formData.r_city} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>STATE *</label>
                <input type='text' name='r_state' value={formData.r_state} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>COUNTRY *</label>
                <input type='text' name='r_country' value={formData.r_country} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>ZIP/POSTAL CODE *</label>
                <input type='text' name='r_zip' value={formData.r_zip} onChange={handleChange} />
              </div>
              <div className='form-control'>
                <input type='submit' name='r_submit' className='submit-rgstry' value='Create My Registry' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateRegistryForm
