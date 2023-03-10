import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    title: "Booom Cocktails",
                    category: "category",
                    type: "type",
                    glass: "glass",
                    ingredients: "ingredients",
                    reset: "reset",
                    filter: "filter",
                    apply: "application",
                    all_complete: "Thats All!! thank you.",
                    back: "back",
                    next: "next",
                    finish: "finish",
                    step1: "Personal Informations",
                    step2: "Your Preferences",
                    step3: "Results",
                    cocktail_bar: "Cocktail Bar Name",
                    firstName: "First Name",
                    lastName: "Last Name",
                    phone: "Phone",
                    email: "Email",
                    name_of_bar: "Name of cocktail bar",
                    name_of_owner: "Name of owner",
                    last_name_of_owner: "Last Name of owner",
                    generated: "Generated cocktails",
                    enjoy: "enjoy!",
                    thatsAll: "thats All!! yum yum"
                }
            },
            tr: {
                translation: {
                    title: "Bloom Kokteylleri",
                    category: "kategori",
                    type: "tip",
                    glass: "bardak",
                    ingredients: "i??indekiler",
                    reset: "S??f??rla",
                    filter: "filtre",
                    apply: "uygulama",
                    all_complete: "Hepsi Bu Kadar!! te??ekk??r ederim",
                    back: "geri",
                    next: "sonraki",
                    finish: "biti??",
                    step1: "Ki??isel bilgiler",
                    step2: "Tercihleriniz",
                    step3: "Sonu??lar",
                    cocktail_bar: "Kokteyl Bar?? Ad??",
                    firstName: "??lk ad??",
                    lastName: "Soy isim",
                    phone: "Telefon",
                    email: "E-posta",
                    name_of_bar: "Kokteyl bar??n??n ad??",
                    name_of_owner: "Sahibinin ad??",
                    last_name_of_owner: "Sahibin Soyad??",
                    generated: "Olu??turulan kokteyller",
                    enjoy: "E??lence!",
                    thatsAll: "bu kadar!! Ham ham"
                }
            }
        }
    });

export default i18n;