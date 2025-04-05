import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer, categoriesReducer } from './eventss/eventsSlice.js';
import feedbackReducer from './feedbackSlice/feedbackSlice.js'
import teamsReducer from './team/teamSlice.js'
const myStore = configureStore({ 
    reducer: {
        events: eventsReducer,
        categories: categoriesReducer,
        feedback: feedbackReducer,
        teams: teamsReducer,

    },
});

export default myStore;  
