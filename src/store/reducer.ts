/*
 * @Author: Hong.Zhang
 * @Date: 2022-09-01 20:25:12
 * @Description:
 */

import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const rootReducer = combineReducers({
  counter: counterSlice,
});
