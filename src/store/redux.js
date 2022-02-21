import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./users.slice";
import postsReducer from "./posts.slice";
import commentsReducer from "./comments.slice";
const store = configureStore({
    reducer:{
        carReducer,
        userReducer,
        postsReducer,
        commentsReducer
    }
})

export default store