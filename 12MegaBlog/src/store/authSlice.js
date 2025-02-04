import {createSlice } from "@reduxjs/toolkit";
// redux tololkit automatically handles spreading existing values ;
//

const initialState = {
    status : false ,
    userData :null, // userInfo
}

const authSlice  =createSlice({ 
     name: "auth",//required components
     initialState,
     reducers :  // reducers an object 
     {
        login:(state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout : (state) => {
            state.status = false;
            state.userData = null;
            // call logout method ,it can change the state 
        }

     }
})

export const {login,logout} =  authSlice.actions;

export default authSlice.reducer;  // authSlice mai se reducer export kr do 

// reducer ke individual function bhi export karne padte hain , to know the state  , dispatching this methods 
// 