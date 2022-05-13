import { configureStore } from "@reduxjs/toolkit"; 
import valueSlicer from "../counterSlice/valueSlice";

export const Store = configureStore({
reducer:{
    value:valueSlicer
}
})