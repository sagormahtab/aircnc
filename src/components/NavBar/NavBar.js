import React, { useState } from 'react';
import './NavBar.scss';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBBtn
    } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Router>
            <MDBNavbar color="white" light expand="md">
                <MDBContainer>
                <MDBNavbarBrand>
                <strong className="nav-logo"><span style={{color:'#2bde8c'}}>A</span><span style={{color: '#3de27e'}}>i</span><span style={{color: '#4fe66f'}}>r</span><span style={{color: '#62ea61'}}>c</span><span style={{color: '#74ee52'}}>n</span><span style={{color: '#86f244'}}>c</span></strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav right className="font-weight-bold">
                    <MDBNavItem>
                    <MDBNavLink to="#!">Host your home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="#!">Host your experience</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="#!">Help</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="#!">Log in</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="#!"><MDBBtn className="primary-grad rounded-pill signUp-btn">Sign Up</MDBBtn></MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            </Router>
        </div>
    );
};

export default NavBar;