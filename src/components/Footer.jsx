import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-black text-white'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="4" md="4" sm="4" className='mb-4 mb-md-0 d-flex align-items-center'>

         <img src={require('../images/logo-removebg-preview.png')} alt="" srcset="" width={"80px"}/>
         <h4 style={{color:'#0191b4'}} >King Treavel</h4>
          </MDBCol>

          <MDBCol lg="4" md="4" sm="4" className='mb-4 mb-md-0 justify-content-center d-flex align-items-center'>

            <ul className='list-unstyled mb-0 '>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                   Home
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  About
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#!' className='text-white text-decoration-none'>
                  Content
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="4" md="4" sm="4" className='mb-4 mb-md-0 justify-content-end d-flex align-items-center'>

            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                <a href="a"><FontAwesomeIcon icon={faFacebook} color='#fff' style={{"font-size":"25px"}}/></a>
                </a>
              </li>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                <a href="a"><FontAwesomeIcon icon={faTwitter}  color='#fff' style={{"font-size":"25px"}}/></a>
                </a>
              </li>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                <a href="a"><FontAwesomeIcon icon={faInstagram}  color='#fff' style={{"font-size":"25px"}}/></a>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

     
    </MDBFooter>
  );
}

