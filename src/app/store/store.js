import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer, categoriesReducer } from './eventss/eventsSlice.js';
import feedbackReducer from './feedbackSlice/feedbackSlice.js'
import teamsReducer from './team/teamSlice.js'
import newsReducer from "./new/NewsSlice.js"; 
import reviewsReducer from '../store/reviews/reviewSlice.js'; 
import {languageReducer} from "./languageSlice/languageSlice.js";
import profileReducer from './profile/ProfileSlice.js';

const myStore = configureStore({ 
    reducer: {
        events: eventsReducer,
        categories: categoriesReducer,
        feedback: feedbackReducer,
        teams: teamsReducer,
        news: newsReducer, 
        reviews: reviewsReducer,
        language: languageReducer,
        profile: profileReducer,
    },
});

export default myStore;  
