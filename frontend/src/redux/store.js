// stores project's states for our website( availability of token)
import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";

const Store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default Store;