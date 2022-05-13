import { configureStore } from "@reduxjs/toolkit"; 
import chappatiSlice from "../counterSlice/chappatiSlice";
import orderSlice from "../counterSlice/orderSlice";

export const Store = configureStore({
reducer:{
    chappati:chappatiSlice,
    order:orderSlice,
}
})