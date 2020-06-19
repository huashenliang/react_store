import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Slides from './components/Slides';
import Products from './components/Products';
import promotion from './images/promotion.jpg';
import {Image }from 'react-bootstrap'

const background = { width: '100%', height: '400px', objectFit: 'cover', opacity: '0.8'};
const textStyle = {
  fontWeight: 'bold',
  border: '5px solid white',
  color: 'white',
  top: '60%', 
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)'
};

const textStyle_2 = {
  fontWeight: 'bold',
  border: '5px solid white',
  color: 'white',
  top: '80%', 
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)'
};

class App extends Component {
  render() { 
  return (
    <div className="App">
      <NavBar />
      <Slides />
      <Products />
      <div style={{width: 'auto', height: '400px', paddingTop: '5%', position: 'relative', textAlign: 'center'}}>
                <Image 
                  style={background} responsive 
                  src={promotion}>
                </Image>
                <h1 style={textStyle}>UP TO 40% OFF</h1>
                <h1 style={textStyle_2}>IN SECOND HAND DRUMS</h1>
            </div>
    </div>
  );
  }
}

export default App;
