import { combineReducers, configureStore } from "@reduxjs/toolkit";

export interface RootState {}

const reducers = combineReducers<RootState>({});

export const store = configureStore({
        reducer: {},
});
