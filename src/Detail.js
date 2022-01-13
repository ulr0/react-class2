import React from 'react';
import { useHistory } from 'react-router-dom';

// detail 페이지 component
function Detail(){

    let history = useHistory(); //방문기록 등을 저장해놓는 object

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>가격</p>
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