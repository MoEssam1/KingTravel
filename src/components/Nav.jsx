import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar,Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { MYNav,Firstnav,Logo,Accoutns,Login, Icons,Secondnav} from './StyledComponentes';
import '../App.css'
const NavConponent = () => {
  return (
    <MYNav>
        <Container fluid>
        <Firstnav>
          <Row>
          <Col lg={4} md={4} className='col'>
            <div className='searchdiv'>
            <input type='text' className='search' placeholder='Search' />
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#fff' /> 
            </div>
         
          </Col>
          <Col lg={4} md={4} className='col'>
            <Logo>
              <img src={require('../images/logo.jpeg')} alt="" />
              <h3>King Travel</h3>
            </Logo>
          </Col>
          <Col lg={4} md={4} className='col'>
          <Accoutns>
              <Login>
                <a href="mohae">Login</a>
                <div className='vr'></div>
                <a href='mohae'>register</a>
              </Login>
              <Icons>
              <a href="a"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="a"><FontAwesomeIcon icon={faTwitter} /></a> 
              <a href="a"><FontAwesomeIcon icon={faInstagram} /></a> 
               </Icons>
          </Accoutns>
          </Col>
          </Row>
        </Firstnav>  
        </Container>  
        <Navbar className='w-100 b-nav'>
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="#home" className='me-2'>Home</Nav.Link>
            <Nav.Link href="#features" className='me-2'>About</Nav.Link>
            <Nav.Link href="#pricing" className='me-2'>Hotel</Nav.Link>
            <Nav.Link href="#pricing" className='me-2'>Flight</Nav.Link>
            <Nav.Link href="#pricing" className='me-2'>Blog</Nav.Link>
            <Nav.Link href="#pricing"className='me-2'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </MYNav>
  )
}

export default NavConponent