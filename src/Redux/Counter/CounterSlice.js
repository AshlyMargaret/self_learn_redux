import { createSlice } from "@reduxjs/toolkit";  // import slice library for create each slice state


export const counterlice = createSlice({
    name : "counter",
    initialState : {
        value : 0
    },
    reducers:{
        increase_count : (state) =>{
           state.value += 1
        },
        decrease_count : (state) =>{
            state.value -= 1
         }
    }
})

export const {increase_count,decrease_count} = counterlice.actions
export default counterlice.reducer