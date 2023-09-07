import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { createContext, useState } from "react";

import HomeComponent from "./component/HomeComponent";
import DetailComponent from "./component/DetailComponent";

export const GlobalContext = createContext();

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SHOES4</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/detail" element={<DetailComponent />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
