import React from 'react';
import {Container, Row, Col, Image, Card, Button} from 'react-bootstrap';
import product_1 from '../../images/product_1.jpg';
import product_2 from '../../images/product_2.jpg';

const Promoted_Products = () => {

  return ( 
    <Container>
       <h1 style={{paddingTop: '15%', paddingBottom: '5%', borderBottom: '5px sloid black', textAlign:'center'}}>
          Trending Products
      </h1>
        <Row>
          <Col xs={12} lg={4}>
            <Card style={{border: 'none'}}>
              <Card.Img variant="top" src={product_2}/>
              <Card.Body>
                <Card.Title>Drum product 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="outline-dark">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card style={{border: 'none'}}>
            <Card.Img variant="top" src={product_2}/>
              <Card.Body>
                <Card.Title>Drum product 4</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="outline-dark">Add to Cart</Button>
                    </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card style={{border: 'none'}}>
            <Card.Img variant="top" src={product_2}/>
              <Card.Body>
                <Card.Title>Drum product 5</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="outline-dark">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={4}>
            <Card style={{border: 'none'}}>
              <Card.Img variant="top" src={product_2}/>
              <Card.Body>
                <Card.Title>Drum product 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="outline-dark">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card style={{border: 'none'}}>
            <Card.Img variant="top" src={product_2}/>
              <Card.Body>
                <Card.Title>Drum product 4</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="outline-dark">Add to Cart</Button>
                    </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card style={{border: 'none'}}>
            <Card.Img variant="top" src={product_2}/>
              <Card.Body>
                <Card.Title>Drum product 5</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="outline-dark">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
   );
}
 
export default Promoted_Products;