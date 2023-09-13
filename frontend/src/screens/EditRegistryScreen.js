import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const EditRegistry = ({ match }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const registryId = match.params.id;
  
  const [registry, setRegistry] = useState({});
  const [formData, setFormData] = useState({}); // Initialize formData state

  useEffect(() => {
    axios.get(`/api/registarevent/${registryId}`).then((res) => {
      setRegistry(res.data);
      setFormData(res.data); // Set formData with registry data
    });
  }, [registryId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const config = {
    headers: {
    Authorization:`Bearer ${userInfo.token}`
    },  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/registarevent/${registryId}`, formData, config)

      .then((response) => {
        // Handle the response or redirect to another page
        console.log('Registry updated successfully:', response.data);
        alert('Registry updated successfully');

        // You can redirect the user to another page or show a success message
      })
      .catch((error) => {
        // Handle errors
        console.error('Error updating registry:', error);

        // You can show an error message to the user
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
            <h4>Registry Profile</h4>
            <div className='form-fields'>

          
              <div className='form-control half-width'>
                <label>REGISTRY TITLE *</label>
                
                <input type='text' name='regtitle' value={formData.regtitle || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>EVENT DATE *</label>
                
                {/* <input type='date' name='regdate' value={formData.regdate || ''} onChange={handleChange} /> */}

              
        <input type='date' name='regdate' value={formData.regdate || ''} onChange={handleChange} />


              </div>
              <div className='form-control'>
                <label>PUBLIC MESSAGE TO FRIENDS AND FAMILY *</label>
                <input type='text' name='regmessage' value={formData.regmessage || ''} onChange={handleChange} />
              </div>
              <div className='form-control'>
                <label>ADD ADDITIONAL INFO</label>
                <input type='text' name='regaddinfo' value={formData.regaddinfo || ''} onChange={handleChange} />
              </div>
              <div className='form-control'>
                <label>TYPE OF EVENT</label>
                <select name="regtype" value={formData.regtype || ''} onChange={handleChange} >
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
                <input type='text' name='r_title' value={formData.r_title || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>FIRST NAME *</label>
                <input type='text' name='r_fname' value={formData.r_fname || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>LAST NAME *</label>
                <input type='text' name='r_lname' value={formData.r_lname || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>EMAIL *</label>
                <input type='email' name='r_email' value={formData.r_email || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>PHONE *</label>
                <input type='tel' name='r_phone' value={formData.r_phone || ''} onChange={handleChange} />
              </div>
            </div>
            <h4>Shipping Information</h4>
            <div className='form-fields'>
              <div className='form-control'>
                <label>ADDRESS *</label>
                <input type='text' name='r_address' value={formData.r_address || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>CITY *</label>
                <input type='text' name='r_city' value={formData.r_city || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>STATE *</label>
                <input type='text' name='r_state' value={formData.r_state || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>COUNTRY *</label>
                <input type='text' name='r_country' value={formData.r_country || ''} onChange={handleChange} />
              </div>
              <div className='form-control half-width'>
                <label>ZIP/POSTAL CODE *</label>
                <input type='text' name='r_zip' value={formData.r_zip || ''} onChange={handleChange} />
              </div>
              <div className='form-control'>
                <input type='submit' name='r_submit' className='submit-rgstry' value='Update My Registry' />
              </div>
            </div>
          </form>

    
  );
};

export default EditRegistry;
