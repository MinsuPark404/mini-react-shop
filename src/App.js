import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { createContext, useState } from "react";

import HomeComponent from "./component/HomeComponent";
import DetailComponent from "./component/DetailComponent";
import ErrorPage from "./pages/ErrorPage";


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
        
        {/* 리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기 */}


        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<About />} />
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route> */}


        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
const About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

const Event = () => {
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
