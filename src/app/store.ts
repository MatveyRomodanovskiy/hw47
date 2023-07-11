import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import weatherInfo from '../slices/weatherSlice';
import message from "../slices/messageSlice";

export const store = configureStore({
    reducer: {
        weatherInfo, message
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
