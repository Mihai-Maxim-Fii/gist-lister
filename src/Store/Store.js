
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import gists_reducer from "./Reducers/AllGistsReducer";
import request_status_reducer from "./Reducers/RequestStatusReducer";

const Store = configureStore({
    reducer:{
       gists_reducer,
       request_status_reducer
    },
    middleware:[thunk]
})

export default Store