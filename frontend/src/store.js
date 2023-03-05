import {configureStore} from "@reduxjs/toolkit";
import { adminReducer } from "./Reducers/adminReducer";
import { bookingReducer } from "./Reducers/BookingReducer";
import { carReducer } from "./Reducers/CarReducer";
import { userReducer } from "./Reducers/UserReducer";

const store = configureStore({
    reducer:{
        user:userReducer,
        cars:carReducer,
        booking:bookingReducer,
        admin:adminReducer
    }
});

export default store;