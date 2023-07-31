import React from 'react'
import styles from "../css/Background.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "../images/maining.jpg";
import { Container } from 'react-bootstrap';
import '../css/background.css'
const Homeview = () => {
  return (
      <article
          className={styles.article}
          style={{ backgroundImage: `url(${background})` }}
      >
          <div className={styles.header}>
              <h1>Explore The World</h1>
              <h2>Enjoy and discover the world </h2>
              <h5>Book your flights with oase throuhg our website or application and enjoy the world.</h5>
          </div>
          <Container>
              <div className={styles.book}>
                  <Container fluid>
                      <div className='inside-book'>
                          <div className='stamba'>
                              <div className='title'>
                                  <h3>Where ?</h3>
                              </div>
                              <div className='content'>
                                  <input type="text" placeholder='Bali ,Pakistan' />
                              </div>
                          </div>
                          <div className="vr"></div>
                          <div className='stamba'>
                              <div className='title'>
                                  <h3>Check in</h3>
                              </div>
                              <div className='content'>
                                  <input type="date" name="" id="" />
                              </div>
                          </div>
                          <div className='stamba'>
                              <div className='title'>
                                  <h3>Check out</h3>
                              </div>
                              <div className='content'>
                                  <input type="date" name="" id="" />
                              </div>
                          </div>
                          <div className="vr"></div>
                          <div className='stamba '>
                              <div className='title'><h3>Room</h3></div>
                              <div className='content'>
                                  <input type="number" name="" id="" className='numroom' defaultValue={1} />
                              </div>
                          </div>
                          <div className='stamba'>
                              <button type='submit'>Search</button>
                          </div>
                      </div>
                  </Container>
              </div>
          </Container>
      </article>
  )
}

export default Homeview