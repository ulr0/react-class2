/* eslint-disable */

import React, { useState } from 'react';
import { Navbar,Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

// 'react-router-dom' install 후 import
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Switch
          여러 경로가 일치해도 위에 있는 하나만 보여준다. */}

      <Switch>
      
        {/* Router 사용
            <Router path="/path"> HTML </Router>
            exact 속성은 경로가 정확히 일치할 때만 내용 보여줌 
            HTML을 Component로 만들어서 깔끔하게 사용하는 방법 
            <Route path="/a" component={Modal}></Route> */}
        <Route exact path="/">
          <div>

            <div className="jumbotron">
              <h1>20% Season Off</h1>
              <p>
                This is a simple hero unit, a simple Jumbotron-style component 
                for calling extra attention to featured content or informaion.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </div>

            <div className="container">
              <div className="row">
                {
                  shoes.map( (a, i)=>{
                    return <Card shoes = { a } i = { i } key = { i }/>
                  })
                }
              </div>
            </div>

          </div>
        </Route>
        
        <Route path="/detail/:id">
          <Detail shoes={shoes}/>
        </Route>
        
        {/* <Route path="/:id">
          <div>아무거나 적었을 때</div>
        </Route> */}

      </Switch>
    
    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%" />
      <h4> { props.shoes.title } </h4>
      <p> { props.shoes.content } & { props.shoes.price } </p>
    </div>
  )
}

export default App;
