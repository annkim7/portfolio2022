import { configureStore, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';

let career = createSlice({
    name : 'career',
    initialState : [
        {id : 0, name : '테일러페이퍼', content : 'CSS의 기본과 디자이너와의 협력 방식을 배웠습니다.'},
        {id : 1, name : '마이스허브', content : 'javascript의 기본과 개발자, 기획자와의 협력 방식을 배웠습니다.'},
        {id : 2, name : '마이스허브', content : 'vue를 이용한 퍼블리싱, react와 node를 자가학습'}
    ]
})

let list = createSlice({
    name : 'list',
    initialState : [],
    reducers: {
        setList: (state) => {
            console.log(state);
            return state
        },
    }
})

// axios.get('/list').then((response) => {
//     console.log(response.data)
// }).catch(()=>{
//     console.log('실패')
// })

export default configureStore({
    reducer: {
        career : career.reducer,
        list : list.reducer
    }
})
export let { setList } = list.actions 