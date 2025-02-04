import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;


/* 
make another store to track authentication 
make slice : to check user is authorized or not 

required : name initial state, reducers

feature[authentication , store ]

reducers ke under jo bhi hote hai unke paas 
state,action[payload ] ka access hota hai

2. have  to  make postslice [assignment]
    goes in states 
    state.allpost 
    state.userPost
    using these add values

*/