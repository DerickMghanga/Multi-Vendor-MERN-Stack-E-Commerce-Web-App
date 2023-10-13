import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
    LoadUserRequest: (state) => {  //login request(attempt)
        state.loading = true;
    },
    LoadUserSuccess: (state, action) => {  //after succesfull login
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
    },
    LoadUserFailed: (state, action) => {  //failed login
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    clearErrors: (state) => {  //clear errors
        state.error = null;
    },
});