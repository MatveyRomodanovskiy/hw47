import {createSlice} from "@reduxjs/toolkit";
import { WeatherInfo} from "../utils/constants";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: <WeatherInfo>{},
    reducers: {
        putWeather(state, action){
            return action.payload;
        }
    }
})

export const {putWeather} = weatherSlice.actions;
export default weatherSlice.reducer;