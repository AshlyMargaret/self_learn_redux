import {configureStore} from '@reduxjs/toolkit'
import colorReducer from './Color/ColorSlice'   // export default colorSlice.reducer
import countReducer from './Counter/CounterSlice'

export default configureStore({
    reducer:{
        color :colorReducer,
        count : countReducer
    }
})