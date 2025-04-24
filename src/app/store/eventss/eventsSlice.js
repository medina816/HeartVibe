import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/apiClient';

// Асинхронные экшены
export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async (_, { getState, rejectWithValue }) => {
        try {
            const lang = getState().language.currentLanguage;
            const response = await apiClient.get(`events?lang=${lang}`);
            return response.data;
        } catch (error) {
            const message = error.response?.data?.message || error.message || 'Не удалось загрузить события';
            return rejectWithValue(message);
        }
    }
);

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { getState, rejectWithValue }) => {
        try {
            const lang = getState().language.currentLanguage;
            const response = await apiClient.get(`/events-categories?lang=${lang}`);
            return response.data;
        } catch (error) {
            const message = error.response?.data?.message || error.message || 'Не удалось загрузить категории';
            return rejectWithValue(message);
        }
    }
);


export const fetchSingleEvent = createAsyncThunk(
    'events/fetchSingleEvent',
    async ({ id, lang }, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`events/${id}`, {
                params: { lang }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

// Слайс для событий
const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        currentEvent: null,
        status: 'idle', // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {
        // Экшен для очистки текущего события
        clearCurrentEvent(state) {
            state.currentEvent = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // События
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Получение одного события
            .addCase(fetchSingleEvent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSingleEvent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentEvent = action.payload;
            })
            .addCase(fetchSingleEvent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Слайс для категорий
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Экспорты
export const { clearCurrentEvent } = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
export const categoriesReducer = categoriesSlice.reducer;
