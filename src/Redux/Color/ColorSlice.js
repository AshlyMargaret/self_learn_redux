import { createSlice } from "@reduxjs/toolkit";   // used for creating each store for color,counter and its called slice



export const colorSlice = createSlice({
    name : "color",
    initialState :{
        value : "blue"
    },
    reducers:{
        change_Color : (state,action)=>{
            state.value = action.payload.color
        }
    }
})

export const {change_Color} = colorSlice.actions
export default colorSlice.reducer