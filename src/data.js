export default [
    {
        id : 0,
        title : "White and Black",
        content : "Born in France",
        price : 120000
    },

    {
        id : 1,
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000
    },

    {
        id : 2,
        title : "Grey Yordan",
        content : "Born in the States",
        price : 130000
    }
] 

// import / export
// 내보내기 : export default 변수명
// 가져오기 : import 변수명 from 경로

// var name = 'Kim';
// export default name 

// 다른 파일에서 갖다 쓸 때는
// import name from './data.js';

// export default 는 보통 파일 가장 하단에 위치
// export default 는 파일 하나당 한 번만 쓸 수 있다.

// 여러 개의 변수를 export 할 때
// export { name, name2 }
// import { name, name2 } from './data.js';