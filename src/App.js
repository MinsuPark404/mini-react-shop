import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from 'react';
import data from './data.js';

function App(){

  let [shoes, setShoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </div>

          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
          </div>
          
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
