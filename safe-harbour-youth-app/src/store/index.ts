// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import ngoReducer from "../store/ngoSlice";

export const store = configureStore({
  reducer: {
    ngos: ngoReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
