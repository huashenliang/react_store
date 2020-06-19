import React from 'react';
import {Carousel} from 'react-bootstrap';
import slide_1 from '../../images/slides_1.jpg';
import slide_2 from '../../images/slides_2.jpg';
import slide_3 from '../../images/slides_3.jpg';

const Slides = () => {
  return ( 
    <Carousel style={{height: '70vh'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide_1}
      alt="First slide"
      style={{height: '70vh', objectFit: 'cover'}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide_2}
      alt="Third slide"
      style={{height: '70vh', objectFit: 'cover'}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide_3}
      alt="Third slide"
      style={{height: '70vh', objectFit: 'cover'}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}
 
export default Slides;