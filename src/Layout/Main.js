import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import SideNavBar from '../Pages/Shared/SideNavBar/SideNavBar';

const Main = () => {
    return (
        <div><Header></Header>
           <Container>
            <Row>
                <Col lg="3" className='d-none d-lg-block'>
                <SideNavBar></SideNavBar>
                </Col>
                <Col lg="7">
                <Outlet></Outlet>
                </Col>
                <Col lg="2">
                <RightSideNav></RightSideNav>
                </Col>
            </Row>
            </Container>
            <Footer></Footer> 
        </div>
    );
};

export default Main;