import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let baseState = [
  { id : 0, name : '멋진 신발', quan : 2 },
  { id : 1, name : '스니커즈', quan : 1},
  { id : 2, name : '러닝화', quan : 3},
  { id : 3, name : '고무신', quan : 1}
] 

// (수정된 or 원래) state 값을 return하는 함수
// parameter state = 초기값
// parameter action = 데이터가 수정되는 조건
function reducer(state = baseState, action){
  if ( action.type === '수량증가' ) {

    let copy = [...baseState];
    copy[0].quan++;
    return copy

  } else if ( action.type === '수량감소' ) {
    
    let copy = [...baseState];
    if (copy[0].quan > 1 ) {
      copy[0].quan--;
      return copy
    } else {
      alert('1개 이상 주문 가능합니다.');
      copy[0].quan = 1;
      return copy
    }
  
  } else {
    return state
  }
}

let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
