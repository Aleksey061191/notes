import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import rootReducer from "./reduser";


export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export const store = setupStore();
