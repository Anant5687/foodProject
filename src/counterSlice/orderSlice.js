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
            state.orderedItem.splice(action.payload,1)
        },
        
    addQuantity: (state, action) => {
        state.orderedItem[action.payload].quantity = state.orderedItem[action.payload].quantity + 1
        console.log(state.orderedItem[action.payload].quantity )
      },
  
      removeQuantity: (state, action) => {
        state.orderedItem[action.payload].quantity = state.orderedItem[action.payload].quantity - 1
      }
      
    }
})


export const {addItem,removeItem, removeQuantity, addQuantity } = orderSlice.actions
export default orderSlice.reducer