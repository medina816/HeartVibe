import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import ky from "./kg/kg.json";
import ru from "./ru/ru.json";
import en from "./en/en.json";
import {setLanguage} from "../app/store/languageSlice/languageSlice.js";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ky: { translation: ky },
            en: { translation: en },
            ru: { translation: ru }
        },
        fallbackLng: "ru",
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'selectedLanguage'
        },
        interpolation: {
            escapeValue: false
        }
    });

// Синхронизация с Redux store
export const initializeI18n = (store) => {
    i18n.on('languageChanged', (lng) => {
        store.dispatch(setLanguage(lng));
    });
};

export default i18n;