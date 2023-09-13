import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
import SearchProduct from './SearchProduct';
import CreateRegistryForm from './RegistarEvent';
import FormContainer from '../components/FormContainer';
import ManageProduct from './ManageProduct';
// import '../RegisterForm.css';

const AppPage = ({location,history }) => {
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const{loading,error,userInfo}=userLogin

  const redirect=location.search?location.search.split('=')[1]:'/'

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const submitHandler=(e)=>{
      e.preventDefault()
      dispatch(login(email,password))
  }
  return (
    <FormContainer>
      <h1 class="heading-name-evm">Sign in</h1>

      <div >
      <div className="tab-buttons evm-button">
        <button class="evm-gift-btn search"
          onClick={() => handleTabClick(0)}
          className={activeTab === 0 ? 'active' : 'evm-gift-btn'}
        >
          Find
        </button>
        <button class="evm-gift-btn create"
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? 'active' : 'evm-gift-btn'}
        >
          Create
        </button>
        <button class="evm-gift-btn manage"
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? 'active' : 'evm-gift-btn'}
        >
          manage
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && 
        <p>
           
            <SearchProduct/>
            
        </p>}
        {activeTab === 1 && <p>
            
            <CreateRegistryForm/>
            </p>}
        {activeTab === 2 && <p>
            
            <ManageProduct/>
         
            
            </p>}
      </div>
    </div>
     
    </FormContainer>
  );
};

export default AppPage;

