import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const PageDesign = ({location,history}) => {
  return (
    <FormContainer>
      <h1>Front Page Design</h1>      
      <Form>
        <h2> Find Button Setting </h2>      
        <FormGroup controlId='btntxt'>
          <FormLabel>Button Text</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Button Text'            
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='btncolor'>
          <FormLabel>Button Color</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Button Color'            
          ></FormControl>
        </FormGroup>

        <h2> Create Button Setting </h2>      
        <FormGroup controlId='cbtntxt'>
          <FormLabel>Button Text</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Button Text'            
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='cbtncolor'>
          <FormLabel>Button Color</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Button Color'            
          ></FormControl>
        </FormGroup>

        <h2> Manage Button Setting </h2>      
        <FormGroup controlId='mbtntxt'>
          <FormLabel>Button Text</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Button Text'            
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='mbtncolor'>
          <FormLabel>Button Color</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Button Color'            
          ></FormControl>
        </FormGroup>

        <Button type='submit' variant='primary'>Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default PageDesign;
