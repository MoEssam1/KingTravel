import React from 'react'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Container, Row,Col,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight,faLocationDot} from '@fortawesome/free-solid-svg-icons'

import '../css/offer.css'
const Offer = () => {
    const [index,setIndex]=useState(0);

    let offers=[
    {
       image:require('../images/dubai.jpeg'),
       title:"Dubai. United Arab Emirates"
    },
    {
        image:require('../images/qater.jpeg'),
        title:"Doha. Qater"
     },
     {
        image:require('../images/maldive.jpeg'),
        title:"Maldives. Pakistan"
     },
     {
      image:require('../images/dubai.jpeg'),
      title:"Dubai. United Arab Emirates"
   },
   {
    image:require('../images/qater.jpeg'),
    title:"Doha. Qater"
   }
    ];
    function left() {
      if(index>0){
        setIndex((i)=>i-1)
      }
      else{
        
      }
    }
    function right() {
      if(index+3<offers.length)
      {
        setIndex(i => i+1)
      }
    }
  return (
    <Container>
    <div className='offer animate'>
     <Row className='align-items-center'>
        <Col className='title' lg={3} md={4} sm={5} xs={6}>
          <h2>Special <span>Offer</span></h2>
        </Col>
        <Col lg={7} md={6} sm={4} xs={3}><hr /></Col>
        <Col className='text-right' lg={2} md={2} sm={3} xs={3}>
        <Button className='radius me-2' onClick={left}><FontAwesomeIcon icon={faAngleLeft} /></Button>
        <Button className='radius' onClick={right}><FontAwesomeIcon icon={faAngleRight} /></Button>
        </Col>
     </Row>
       <Row className='mt-4 horz animate'>
       {offers.slice(index).map((offer) => {
        return (
          <Col lg={4} md={6} sm={6} className='animate'>
          <Card style={{ "max-width": '22rem' }}>
          <Card.Img variant="top" src={offer.image} />
          <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faLocationDot} /> {offer.title}</Card.Title>        
          </Card.Body>
          </Card>
          </Col>
        );
      })}
       </Row>
    
    </div>
    </Container>

  )
}

export default Offer