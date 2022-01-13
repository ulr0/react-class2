import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

// detail 페이지 component
function Detail(props){

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