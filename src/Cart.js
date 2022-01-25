import React, { useEffect, memo } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import './Cart.css';

function Cart(props){

    let state = useSelector((state) => state.reducer);
    let dispatch = useDispatch();

    return(
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>상품 id</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((a, i)=>{
                            return (
                                <tr key={i}>
                                    <td>{ a.id }</td>
                                    <td>{ a.name }</td>
                                    <td>{ a.quan }</td>
                                    <td>
                                        <button onClick={()=>{ dispatch({ type : '수량증가', payload : a.id }) }}>+</button>
                                        <button onClick={()=>{ dispatch({ type : '수량감소', payload : a.id }) }}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {   // 여러 컴포넌트에 쓰이지 않는 이런 종류의 state 는
                // redux store에 저장하지 않고
                // useState 사용하는 게 좋다.
                state.onAlert === true
                ? ( <div className="my-alert2">
                        <p>지금 구매하시면 신규 할인 20%</p>
                        <button onClick={()=>{ props.dispatch({ type : 'off'}) }}>닫기</button>
                    </div>)
                : null
            }

            <Parent 이름='안녕1' 나이='30'></Parent>
            

        </div>

    )
}


// memo() 불필요한 재렌더링 막을 수 있음
// 컴포넌트와 관련된 props가 변경될 때만 재렌더링
function Parent(props){
    return (
    <div>
        <Child1 이름={props.이름}></Child1>
        <Child2 나이={props.나이}></Child2>
    </div>
    )
}

function Child1(){
    useEffect(()=>{ console.log('렌더링됨1') });
    return <div>11111</div>
}

let Child2 = memo(function(){
    useEffect(()=>{ console.log('렌더링됨2') });
    return <div>22222</div>
});




// store 안의 state 데이터를 가져와서 props로 변환해주는 함수
// function stateToProps(state){
//     return {
//         state : state.reducer,
//         onAlert : state.reducer2
//     }
// }

// export default connect(stateToProps)(Cart)

export default Cart;