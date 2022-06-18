import { configureStore, createSlice } from '@reduxjs/toolkit'


// let test = axios.get('/list').then((결과)=>{
//     console.log(결과.data)
// })
// .catch(()=>{
//     console.log('실패함')
// })


let career = createSlice({
    name : 'career',
    initialState : [
        {id : 0, name : '테일러페이퍼', content : 'CSS의 기본과 디자이너와의 협력 방식을 배웠습니다.'},
        {id : 1, name : '마이스허브', content : 'javascript의 기본과 개발자, 기획자와의 협력 방식을 배웠습니다.'},
        {id : 2, name : '마이스허브', content : 'vue를 이용한 퍼블리싱, react와 node를 자가학습'}
    ]
})

// let testA = createSlice({
//     name : "testA",
//     initialState : test
// })

export default configureStore({
    reducer: {
        career : career.reducer,
        // testA : testA.reducer
    }
})