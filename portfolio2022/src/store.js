import { configureStore, createSlice } from '@reduxjs/toolkit'

let list = createSlice({
    name : 'list',
    initialState : [],
    reducers: {
        updateList(state, data){
            return data.payload
        }
    }
})

export default configureStore({
    reducer: {
        list : list.reducer
    }
})
export let { updateList } = list.actions 