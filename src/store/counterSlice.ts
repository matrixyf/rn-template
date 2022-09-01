
/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-28 22:52:42
 * @Description:
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "../api/counter";

/**
 * side effects actions, like API request
 */
 export const incrementAsync = createAsyncThunk(
  'counter/asyncIncrement',
  async (s: string) => {
    const response = await fetchCount(s);
    return response.data;
  }
);

/**
 * namespace, initlaState and common reducers.
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, { payload}) => {
      const { step } = payload;
      state.count += step;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: {
    [incrementAsync.fulfilled.type]: (state, { payload }) => {
      state.count += payload;
    },
  },
});


/**
 * common actions generated according to common reducers
 */
export const {increment, decrement} = counterSlice.actions;

/**
 * deault export
 */
export default counterSlice.reducer;
