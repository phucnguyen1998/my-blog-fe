import { configureStore } from "@reduxjs/toolkit";
// import listPostReducer from './../page/ListPost/listPostSlice';
import userReducer from './../page/Auth/userSlice';
import postReducer from './../page/ListPost/postSlice'

const rootReducer = {
    // listPost: listPostReducer,
    user: userReducer,
    post: postReducer
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;