// import store configure 
import{configureStore} from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice';


 export const store = configureStore({ 
    reducer: todoReducer
  });

 // next : To make reducers  :slices /reducers 
 