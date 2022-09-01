/*
 * @Author: Hong.Zhang
 * @Date: 2022-08-28 22:46:27
 * @Description:
 */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

