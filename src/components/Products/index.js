import React from 'react';
import {Container, Row, Col, Image, Card, Button} from 'react-bootstrap';
import product_1 from '../../images/product_1.jpg';
import product_2 from '../../images/product_2.jpg';

const Products = () => {

  return ( 
    <Container>
       <h1 style={{paddingTop: '10%', paddingBottom: '5%', borderBottom: '5px sloid black'}}>
        New Arrivals
      </h1>
        <Row>
          <Col xs={12} lg={6}>
            <Card style={{border: 'none'}}>
            <Card.Img variant="top" src={product_1} />
          </Card>
          </Col>

          <Col xs={12} lg={6}>
            <Card style={{border: 'none'}}>
            <Card.Body>
              <Card.Title>Drum Product 1</Card.Title>
              <Card.Text>
              Tornado kits are manufactured exclusively in Mapex's wholly owned drum production facility, and built to a level of quality only their state of the art machinery, highly trained staff and expert production techniques can guarantee. This drum factory is one of the only facilities of its kind in the world to have achieved ISO9001 certification, the worlds standard for manufacturing excellence.
              </Card.Text>
              <Button variant="outline-dark">Add to Cart</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
    
        <Row style={{paddingTop: "10%"}}>
        <Col xs={12} lg={6}>

            <Card style={{border: 'none'}} >
            <Card.Body  >
              <Card.Title>Drum Product 2</Card.Title>
              <Card.Text>
              Tornado kits are manufactured exclusively in Mapex's wholly owned drum production facility, and built to a level of quality only their state of the art machinery, highly trained staff and expert production techniques can guarantee.             </Card.Text>
              <Button variant="outline-dark">Add to Cart</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col xs={12} lg={6}>
            <Card style={{border: 'none'}}>
            <Card.Img variant="top" src={product_2} />
          </Card>
          </Col>
        </Row>
    </Container>
   );
}
 
export default Products;