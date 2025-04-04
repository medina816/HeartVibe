import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer, categoriesReducer } from './eventss/eventsSlice.js';
import newsReducer from "./new/NewsSlice.js"; 
const myStore = configureStore({ 
    reducer: {
        events: eventsReducer,
        categories: categoriesReducer,
        news: newsReducer, 
    },
});

export default myStore;  
