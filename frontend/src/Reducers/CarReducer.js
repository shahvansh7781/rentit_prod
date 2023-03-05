import {createReducer} from "@reduxjs/toolkit";

const initialState = {};

export const carReducer = createReducer(initialState,{
    allcarsRequest:(state)=>{
        state.loading = true;
    },
    allcarsSuccess:(state,action)=>{
        state.loading = false;
        state.cars = action.payload;
    },
    allcarsFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    allcarsASCRequest:(state)=>{
        state.loading = true;
    },
    allcarsASCSuccess:(state,action)=>{
        state.loading = false;
        state.cars = action.payload;
    },
    allcarsASCFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    allcarsDESCRequest:(state)=>{
        state.loading = true;
    },
    allcarsDESCSuccess:(state,action)=>{
        state.loading = false;
        state.cars = action.payload;
    },
    allcarsDESCFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    particularcarRequest:(state)=>{
        state.loading = true;
    },
    particularcarSuccess:(state,action)=>{
        state.loading = false;
        state.car = action.payload;
    },
    particularcarFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    featuredcarRequest:(state)=>{
        state.loading= true;
    },
    featuredcarSuccess:(state,action)=>{
        state.loading = false;
        state.fCars = action.payload;
    },
    featuredcarFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    }
})