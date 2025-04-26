import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer, categoriesReducer } from './eventss/eventsSlice.js';
import feedbackReducer from './feedbackSlice/feedbackSlice.js'
import teamsReducer from './team/teamSlice.js'
import newsReducer from "./new/NewsSlice.js"; 
import reviewsReducer from '../store/reviews/reviewSlice.js'; 
const myStore = configureStore({ 
    reducer: {
        events: eventsReducer,
        categories: categoriesReducer,
        feedback: feedbackReducer,
        teams: teamsReducer,
        news: newsReducer, 
        reviews: reviewsReducer, // Добавляем редюсер для отзывов
    },
});

export default myStore;  
