import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, Link } from 'react-router-dom'
import { createContext, useState } from "react";

import HomeComponent from "./component/HomeComponent";
import DetailComponent from "./component/DetailComponent";

export const GlobalContext = createContext()

function App() {

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SHOES4</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/detail" element={<DetailComponent />}/>
      </Routes>      
    </div>
  );
}

export default App;
