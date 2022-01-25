/* eslint-disable */

import React, { useContext, useState, lazy, Suspense, useEffect } from 'react';
import { Navbar,Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
// import Detail from './Detail.js';
// Detail 컴포넌트가 필요한 순간에 import
let Detail = lazy(()=> import('./Detail.js') );
import axios from 'axios';
import Cart from './Cart.js';

// 'react-router-dom' install 후 import
import { Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export let stockContext = React.createContext();

function App() {

  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/1">Detail</Nav.Link>
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

              <stockContext.Provider value={stock}>
              <div className="row">
                {
                  shoes.map( (a, i)=>{
                    return <Card shoes = { a } i = { i } key = { i }/>
                  })
                }
              </div>
              </stockContext.Provider>
              <button className="btn btn-primary" onClick={()=>{

                // axios.post('url', { id : test, pw : 1234 }); // post 요청

                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                  console.log(result);
                  // var newShoes = [...shoes];
                  // var newArray = newShoes.concat(result.data);
                  // setShoes(newArray);
                  setShoes( [...shoes, ...result.data] );
                  })
                .catch(()=>{
                  console.log('실패')
                })

                }}>더보기</button>

            </div>

          </div>
        </Route>
        
        <Route path="/detail/:id">
          <stockContext.Provider value={stock}>
            <Suspense fallback={<div>loading...</div>}>
              <Detail shoes={shoes}/>
            </Suspense>
          </stockContext.Provider>
        </Route>
        
        {/* <Route path="/:id">
          <div>아무거나 적었을 때</div>
        </Route> */}

        <Route path="/cart">
          <Cart></Cart>
        </Route>


      </Switch>

    </div>
  );
}

function Card(props){

  let stock = useContext(stockContext);
  let history = useHistory();

  return(
    // 상품 클릭하면 상세 페이지로 이동
    <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.shoes.id) }}>
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%" />
      <h4> { props.shoes.title } </h4>
      <p> { props.shoes.content } & { props.shoes.price } </p>
      {stock[props.i]}
    </div>
  )
}

function Parent(props){
  return (
    <div>
      <Child1 이름={props.이름}></Child1>
      <Child2 나이={props.나이}></Child2>
    </div>
  )
}

function Child1(props){
  useEffect(()=>{ console.log('렌더링됨1') });
  return <div>11111</div>
}

function Child2(props){
  useEffect(()=>{ console.log('렌더링됨2') });
  return <div>22222</div>
}





export default App;

