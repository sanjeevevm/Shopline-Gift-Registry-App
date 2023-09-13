import React from 'react';
import {Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown, NavLink, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Search from './Search'
import { logout } from '../actions/userActions';
import logoImage from '../shoplineLogo.png'
import {useHistory} from "react-router-dom";

const Sidebar = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    let history=useHistory();
    const logoutHandler = () => {
        dispatch(logout());
        history.push('/login')
    };
    return (
        <>
        { (userInfo && userInfo.isAdmin===true) ? (
            <div className='sidebarsec'>
                <sidebar>
                    <Nav className='ml-auto'>
                        <LinkContainer to='/ManageProduct'>
                            <NavLink>
                                <i className='fab fa-dashcube'></i> <span className='sideMenuCls'>Dashboard</span>
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                    
                    <Nav className='ml-auto'>
                        <LinkContainer to='/settings'>
                            <NavLink>
                                <i className='fas fa-tools'></i> <span className='sideMenuCls'>Settings</span>
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                    <Nav className='ml-auto'>
                        <LinkContainer to='/page-design'>                    
                            <NavLink>
                                <i className='fas fa-pager'></i> <span className='sideMenuCls'>Page Design</span>
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                    <Nav className='ml-auto'>
                        <LinkContainer to='/language'>                    
                            <NavLink>
                                <i className='fas fa-language'></i> <span className='sideMenuCls'>Language</span>
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                    <Nav className='ml-auto'>
                        <LinkContainer to='/manual-instruction'>                    
                            <NavLink>
                                <i className='fas fa-book-reader'></i> <span className='sideMenuCls'>Manual Instruction</span>
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                    <Nav className='ml-auto'>
                        <LinkContainer to='/installation-instruction'>                    
                            <NavLink>
                                <i className='fas fa-chalkboard-teacher'></i> <span className='sideMenuCls'>Installation Instruction</span>                       
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                </sidebar>  
            </div>    
        ) : <div className='sidebarsec1'></div>}
        </>
    );
};

export default Sidebar;
