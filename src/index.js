import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let onAlert = true;

function reducer2(state = onAlert, action){
  if ( action.type === 'off' ) {
    state = false;
    return state 
  } else {
    return state
  }
}

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
  if( action.type === '항목추가' ){
    
    let found = state.findIndex((a)=>{ return a.id === action.payload });
    if ( found >= 0 ) {
    
      let copy = [...baseState];
      copy[found].quan++;
      return copy
      
    } else {
      let copy = [...baseState];
      copy.push(action.payload);
      return copy
    }

  } else if ( action.type === '수량증가' ) {

    let copy = [...baseState];
    let id = action.payload
    copy[id].quan++;
    return copy

  } else if ( action.type === '수량감소' ) {
    
    let copy = [...baseState];
    let id = action.payload
    if (copy[id].quan > 1 ) {
      copy[id].quan--;
      return copy
    } else {
      alert('1개 이상 주문 가능합니다.');
      copy[id].quan = 1;
      return copy
    }
  
  } else {
    return state
  }
}

// reducer 여러 개 담기
let store = createStore(combineReducers({reducer, reducer2}));


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
