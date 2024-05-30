import { configureStore } from "@reduxjs/toolkit";
import setupSlice from "./setup/setupSlice";

export const store = configureStore({
  reducer: {
    setup: setupSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
