
/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-28 22:52:42
 * @Description: 
 */
import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: 'counter',
  initialState: {},
  reducers: {
    increment: () => {

    },
    decrement: () => {

    },
  },
  extraReducers: {},
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;