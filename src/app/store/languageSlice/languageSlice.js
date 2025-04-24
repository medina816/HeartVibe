import { createSlice } from "@reduxjs/toolkit";

// Получаем сохраненный язык из localStorage или используем язык браузера
const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) return savedLang;

    const browserLang = navigator.language.split('-')[0];
    return ['ru', 'ky', 'en'].includes(browserLang) ? browserLang : 'ru';
};

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        currentLanguage: getInitialLanguage()
    },
    reducers: {
        setLanguage: (state, action) => {
            state.currentLanguage = action.payload;
            localStorage.setItem('selectedLanguage', action.payload);
        }
    }
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;