import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import kg from "./kg/kg.json";
import ru from "./ru/ru.json";
import en from "./en/en.json";

i18n.use(initReactI18next).init({
    resources: {
        kg: {
            translation: kg
        },
        en: {
            translation: en
        },
        ru: {
            translation: ru
        }
    },
    lng: "ru",
});

export default i18n;