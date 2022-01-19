import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'
import { stockContext } from './App.js';

// styled-component : CSS를 미리 입혀놓은 component를 만든다.
let 박스 = styled.div`
    padding : 20px;
`;

// ${} : 백틱 안에서 사용 가능한 문법 문자열 안에 변수를 넣어줄 수 있다. 
let 제목 = styled.h4`
    font-size : 25px;
    color : ${ props => props.color }
`;

// Lifecycle Hook
// class Detail2 extends React.Component {

//     componentDidMount(){
//     // Detail2 component가 Mount(등장) 할 때 실행할 코드
//     // Ajax 같은 것도 이런 곳에 자주 사용
//     }

//     componentWillUnmount(){
//     // Detail2 component가 Unmount(사라짐) 하기 직전에 실행할 코드
//     }

// }

// detail 페이지 component
function Detail(props){
    
    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState('');

    let stock = useContext(stockContext);

    // useEffect Hook
    // component가 mount 할 때, component가 update 될 때 특정 코드를 실행할 수 있다.
    useEffect(()=>{
        let timer = setTimeout(()=>{ setAlert(false) }, 2000); // component 등장, update 될 때 실행
    
        return ()=>{
            clearTimeout(timer) // component가 unmount 될 때 실행될 코드
                                // setTimeout 주의사항
                                // component 사라질 때 timer 제거해줘야 함.
        }
    }, [alert]); // alert라는 state가 변경 될 때만 실행하게 된다.
                 // [] 빈 칸이면 엽데이트시 실행되지 않는다. 즉 mount 할 때 한 번만 실행됨.
                 // 변경될 state가 없으니까

    // useEffect 는 여러 개 사용 가능
    // 위에서부터 순서대로 실행된다.
    // useEffect(()=>{})

    let history = useHistory(); //방문기록 등을 저장해놓는 object
    let { id } = useParams(); // url parameter 가져오기

    // parameter와 일치하는 상품 id를 가진 상품 찾기
    // find() 함수 : array 안에서 원하는 자료 찾을 때 사용
    // find() 함수는 array 뒤에 붙일 수 있으며 안에 콜백함수 들어감
    // 콜백 함수 내의 parameter (지금은 shoes) 는 array 안에 있는 하나하나의 데이터
    // return 에는 조건식을 적을 수 있다.
    // 조건식이 참인 데이터가 새로운 변수에 저장된다. (지금은 product)
    let product = props.shoes.find( (shoes)=>{
        return shoes.id == id
    })

    return (
      <div className="container">
        <박스>
            <제목 className="pink">Detail</제목>
            {/* <제목 color='blue'>Detail</제목> */}
        </박스>
        
        { input }
        <input onChange={(e)=>{ setInput(e.target.value) }}/>

        {
            alert === true
            ?   (<div className="my-alert-yellow">
                    <p>재고가 얼마 남지 않았습니다.</p>
                </div>)
            : null
        }

        <div className="row">
          <div className="col-md-6">
          <img src={ 'https://codingapple1.github.io/shop/shoes' + ( product.id + 1 ) + '.jpg' } width="100%"/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button className="btn btn-danger" onClick={ ()=>{
                history.goBack();
                {/* 특정 경로로 이동시키려면
                    history.push('경로'); */}
            } }>뒤로가기</button>
          </div>
        </div>
      </div>
    )
  }

export default Detail;