import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {
        clear(state){
            return '';
        },
        error(state){
            return 'Enter correct city name';
        },
        pending(state){
            return 'Pending...';
        }
    }
})

export const {error, clear, pending} = messageSlice.actions;
export default messageSlice.reducer;