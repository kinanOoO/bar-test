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
                    ingredients: "içindekiler",
                    reset: "Sıfırla",
                    filter: "filtre",
                    apply: "uygulama",
                    all_complete: "Hepsi Bu Kadar!! teşekkür ederim",
                    back: "geri",
                    next: "sonraki",
                    finish: "bitiş",
                    step1: "Kişisel bilgiler",
                    step2: "Tercihleriniz",
                    step3: "Sonuçlar",
                    cocktail_bar: "Kokteyl Barı Adı",
                    firstName: "İlk adı",
                    lastName: "Soy isim",
                    phone: "Telefon",
                    email: "E-posta",
                    name_of_bar: "Kokteyl barının adı",
                    name_of_owner: "Sahibinin adı",
                    last_name_of_owner: "Sahibin Soyadı",
                    generated: "Oluşturulan kokteyller",
                    enjoy: "Eğlence!",
                    thatsAll: "bu kadar!! Ham ham"
                }
            }
        }
    });

export default i18n;