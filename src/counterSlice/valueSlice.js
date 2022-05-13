import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subh: 10,
  }

export const valueSlice = createSlice({
    name: 'value',
    initialState,
  reducers: {
      add:(state)=>{
          state.subh += 1
      },
      remove:(state)=>{
        state.subh -= 1
    },
    addByAmount:(state,action)=>{
        state.subh += action.payload
    }
  }
})

export const {add , remove} = valueSlice.actions
export default valueSlice.reducer