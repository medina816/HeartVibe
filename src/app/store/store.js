import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer, categoriesReducer } from './eventss/eventsSlice.js';
const myStore = configureStore({ 
    reducer: {
        events: eventsReducer,
        categories: categoriesReducer,
    },
});

export default myStore;  
