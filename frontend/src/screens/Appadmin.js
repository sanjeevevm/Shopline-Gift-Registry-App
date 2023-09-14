import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';

const Appadmin = ({ tabNames, updateTabNames, buttonColors }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  // Your component logic here
  
  // You must return JSX from the render method
  return (
   

    <FormContainer>
    <h1 class="heading-name-evm">Sign in</h1>

    <div >
    <div className="tab-buttons evm-button">
    <button
  className={activeTab === 0 ? 'active' : 'evm-gift-btn search'}
  onClick={() => handleTabClick(0)}
  style={{ backgroundColor: buttonColors.find }} // Apply the dynamic color
>
  {tabNames.find}
</button>

    <button
    className={activeTab === 1 ? 'active' : 'evm-gift-btn'}
    onClick={() => handleTabClick(1)}
    style={{ backgroundColor: buttonColors.create }} // Apply the dynamic color
    >
    {tabNames.create}
    </button>

    <button
    className={activeTab === 2 ? 'active' : 'evm-gift-btn'}
    onClick={() => handleTabClick(2)}
    style={{ backgroundColor: buttonColors.manage }} // Apply the dynamic color
    >
    {tabNames.manage}
    </button>

    =
    </div>
    <div className="tab-content">
      {activeTab === 0 && 
      <p>
         
         1
          
      </p>}
      {activeTab === 1 && <p>
          
         2
          </p>}
      {activeTab === 2 && <p>
          
        3
       
          
          </p>}
    </div>
  </div>
   
  </FormContainer>


    
  );
};

export default Appadmin;
