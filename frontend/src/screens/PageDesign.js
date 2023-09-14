import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Appadmin from './Appadmin'
import { SketchPicker } from 'react-color';

const PageDesign = ({location,history}) => {
  const [buttonColor, setButtonColor] = useState('#ffffff'); // Initial color


  const [buttonColors, setButtonColors] = useState({
    find: '#eeeeee',
    create: '#eeeeee',
    manage: '#eeeeee',
  });


  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  // ... (other code)

  
  const handleColorChange = (color, tabKey) => {
    setButtonColors((prevButtonColors) => ({
      ...prevButtonColors,
      [tabKey]: color.hex,
    }));
  };

  const [tabNames, setTabNames] = useState({
    find: 'Find',
    create: 'Create',
    manage: 'Manage',
  });

  // Function to handle tab name changes
  const handleTabNameChange = (tabKey, newValue) => {
    setTabNames((prevTabNames) => ({
      ...prevTabNames,
      [tabKey]: newValue,
    }));
    setButtonColors((prevButtonColors) => ({
      ...prevButtonColors,
      [tabKey]: newValue,
    }));
  };
  


  // Function to update tab names in Appadmin
  const updateTabNamesInAppadmin = () => {
    // Pass the updated tab names to Appadmin
    // You can also perform any other actions needed upon submission here
    // For now, just logging the updated tab names
    console.log('Updated Tab Names:', tabNames);
    console.log('Updated Tab Names:', buttonColors);
  };

  return (
    <FormContainer>
    
      <h1>Front Page Design</h1>  
      <div class="main_component_division"> 
      <div class="button-setting-div col-md-6 col-6">
      <Form>
        <h2> Find Button Setting </h2>  
            
        <FormGroup controlId="findTabName">
              <FormLabel>Find Tab Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Find Tab Name"
                value={tabNames.find}
                onChange={(e) => handleTabNameChange('find', e.target.value)}
              ></FormControl>
            </FormGroup>

        {/* <FormGroup controlId='btncolor'>
          <FormLabel>Button Color</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Button Color'            
          ></FormControl>
        </FormGroup> */}

<FormGroup controlId="findButtonColor">
              <FormLabel>Button Color</FormLabel>
              <div
                style={{
                  backgroundColor: buttonColors.find,
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  border: '1px solid',
                }}
                onClick={() => setDisplayColorPicker('find')}
              ></div>
              <div>Selected Color: {buttonColors.find}</div>
              {displayColorPicker === 'find' ? (
                <div style={{ position: 'absolute', zIndex: '2' }}>
                  <div
                    style={{
                      position: 'fixed',
                      top: '0px',
                      right: '0px',
                      bottom: '0px',
                      left: '0px',
                    }}
                    onClick={() => setDisplayColorPicker(false)}
                  />
                  <SketchPicker
                    color={buttonColors.find}
                    onChange={(color) => handleColorChange(color, 'find')}
                  />
                </div>
              ) : null}
            </FormGroup>

        <h2> Create Button Setting </h2>   
        <FormGroup controlId="createTabName">
              <FormLabel>Find Tab Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Tab Name"
                value={tabNames.create}
                onChange={(e) => handleTabNameChange('create', e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="createButtonColor">
              <FormLabel>Button Color</FormLabel>
              <div
                style={{
                  backgroundColor: buttonColors.create,
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  border: '1px solid',
                }}
                onClick={() => setDisplayColorPicker('create')}
              ></div>
              <div>Selected Color: {buttonColors.create}</div>
              {displayColorPicker === 'create' ? (
                <div style={{ position: 'absolute', zIndex: '2' }}>
                  <div
                    style={{
                      position: 'fixed',
                      top: '0px',
                      right: '0px',
                      bottom: '0px',
                      left: '0px',
                    }}
                    onClick={() => setDisplayColorPicker(false)}
                  />
                  <SketchPicker
                    color={buttonColors.create}
                    onChange={(color) => handleColorChange(color, 'create')}
                  />
                </div>
              ) : null}
            </FormGroup>



        

        <h2> Manage Button Setting </h2>      
        <FormGroup controlId="manageTabName">
              <FormLabel>manage Tab Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Tab Name"
                value={tabNames.manage}
                onChange={(e) => handleTabNameChange('manage', e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="manageButtonColor">
              <FormLabel>Button Color</FormLabel>
              <div
                style={{
                  backgroundColor: buttonColors.manage,
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  border: '1px solid',
                }}
                onClick={() => setDisplayColorPicker('manage')}
              ></div>
              <div>Selected Color: {buttonColors.manage}</div>
              {displayColorPicker === 'manage' ? (
                <div style={{ position: 'absolute', zIndex: '2' }}>
                  <div
                    style={{
                      position: 'fixed',
                      top: '0px',
                      right: '0px',
                      bottom: '0px',
                      left: '0px',
                    }}
                    onClick={() => setDisplayColorPicker(false)}
                  />
                  <SketchPicker
                    color={buttonColors.manage}
                    onChange={(color) => handleColorChange(color, 'manage')}
                  />
                </div>
              ) : null}
            </FormGroup>

        
        <Button type="button" variant="primary" onClick={updateTabNamesInAppadmin}>
          Submit
        </Button>
      </Form>
      </div>
      <div class="form-setting-div col-md-6 col-6">
      <Appadmin tabNames={tabNames} updateTabNames={handleTabNameChange} buttonColors={buttonColors} />
      </div>
      </div>
    </FormContainer>
  );
};

export default PageDesign;
