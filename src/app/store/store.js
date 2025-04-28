import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer, categoriesReducer } from './eventss/eventsSlice.js';
import feedbackReducer from './feedbackSlice/feedbackSlice.js'
import teamsReducer from './team/teamSlice.js'
import newsReducer from "./new/NewsSlice.js"; 
import reviewsReducer from '../store/reviews/reviewSlice.js'; 
import otpReducer from '../store/otp/otpSlice.js';
import {languageReducer} from "./languageSlice/languageSlice.js";
import profileReducer from './profile/ProfileSlice.js';
import otpVerificationReducer from '../store/otpVerificationSlice/otpVerificationSlice.js';
import passwordReducer from "./password/passwordSlice.js";


const myStore = configureStore({ 
    reducer: {
        events: eventsReducer,
        categories: categoriesReducer,
        feedback: feedbackReducer,
        teams: teamsReducer,
        news: newsReducer, 
        reviews: reviewsReducer,
        language: languageReducer,
        otp: otpReducer,
        profile: profileReducer,
        otpVerification: otpVerificationReducer,
        password: passwordReducer,


    },
});

export default myStore;  
