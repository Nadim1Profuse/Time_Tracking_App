import {configureStore} from "@reduxjs/toolkit"
import taskDetailReducer from "./taskDetails/taskDetailsSlice" 

export const store=configureStore({
    reducer:{
        taskDetailReducer:taskDetailReducer
    }
});


