import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cache from 'i18next-localstorage-cache';
import { initReactI18next } from "react-i18next";

i18n.use(Cache).use(LanguageDetector).use(initReactI18next).init({
    // we init with resources
    resources: {
        "en-US": {
            translations: {
                "Manage Campaigns": "Manage Campaigns",
                "Upcoming Campaigns": "Upcoming Campaigns",
                "Live Campaigns": "Live Campaigns",
                "Past Campaigns": "Past Campaigns",
                "Date": "Date",
                "Campaign": "Campaign",
                "View": "View",
                "Actions": "Actions",
                "View Pricing": "View Pricing",
                "Report": "Report",
                "Schedule Again": "Schedule Again",
                "Close": "Close",
                "Pricing": "Pricing",
                "Week": "Week",
                "Months": "Months",
                "Month": "Month",
                "Year": "Year"
            }
        },

        ger: {
            translations: {
                "Manage Campaigns": "Manage Campaigns - German",
                "Upcoming Campaigns": "Upcoming Campaigns",
                "Live Campaigns": "Live Campaigns",
                "Past Campaigns": "Past Campaigns",
                "Date": "Date",
                "Campaign": "Campaign",
                "View": "View",
                "Actions": "Actions",
                "View Pricing": "View Pricing",
                "Report": "Report",
                "Schedule Again": "Schedule Again",
                "Close": "Close",
                "Pricing": "Pricing",
                "Week": "Week",
                "Months": "Months",
                "Month": "Month",
                "Year": "Year"
            }
        },

    },
    fallbackLng: "en-US",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;
