import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){

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
                        props.state.map((a, i)=>{
                            return (
                                <tr key={i}>
                                    <td>{ a.id }</td>
                                    <td>{ a.name }</td>
                                    <td>{ a.quan }</td>
                                    <td>
                                        <button onClick={()=>{ props.dispatch({ type : '수량증가' }) }}>+</button>
                                        <button onClick={()=>{ props.dispatch({ type : '수량감소' }) }}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>

    )
}

// store 안의 state 데이터를 가져와서 props로 변환해주는 함수
function stateToProps(state){
    return {
        state : state 
    }
}

export default connect(stateToProps)(Cart)

// export default Cart;