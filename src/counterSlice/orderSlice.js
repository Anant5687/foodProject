import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    orderedItem:[],
    value:0,
}


export const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        addItem:(state, action)=>{
            state.orderedItem.push(action.payload)
        
            alert("Added item in cart")
            console.log(state.orderedItem)
        },
        removeItem:(state, action)=>{
            const FilteredItems = state.orderedItem.id.filter((ele)=>ele.id!==action.payload)
        }
    }
})


export const {addItem,removeItem } = orderSlice.actions
export default orderSlice.reducer