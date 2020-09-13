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
                "Year": "Year",
                "No upcoming campaigns": "No upcoming campaigns",
                "No live campaigns": "No live campaigns",
                "No past campaigns": "No past campaigns",
                "BlueStacks Logo": "BlueStacks Logo",
                "English": "English",
                "German": "German (Deutsche)",
                "Change Language": "Change Language",
                "Switch to": "Switch to",
                "Reschedule": "Reschedule",
                "Thumbnail image of ": "Thumbnail image of ",
                "1 Week - 1 Month": "1 Week - 1 Month",
                "6 Months": "6 Months",
                "1 Year": "1 Year",
                "Action": "Action"
            }
        },

        ger: {
            translations: {
                "Manage Campaigns": "Kampagnen verwalten",
                "Upcoming Campaigns": "Kommende Kampagnen",
                "Live Campaigns": "Live-Kampagnen",
                "Past Campaigns": "Vergangene Kampagnen",
                "Date": "Datum",
                "Campaign": "Kampagne",
                "View": "Aussicht",
                "Actions": "Aktionen",
                "View Pricing": "Preise anzeigen",
                "Report": "Bericht",
                "Schedule Again": "Planen Sie erneut",
                "Close": "Schließen",
                "Pricing": "Preisgestaltung",
                "Week": "Woche",
                "Months": "Monate",
                "Month": "Monat",
                "Year": "Jahr",
                "No upcoming campaigns": "Keine bevorstehenden Kampagnen",
                "No live campaigns": "Keine Live-Kampagnen",
                "No past campaigns": "Keine vergangenen Kampagnen",
                "BlueStacks Logo": "BlueStacks-Logo",
                "English": "Englisch (English)",
                "German": "Deutsche",
                "Change Language": "Sprache ändern",
                "Switch to": "Wechseln zu",
                "Reschedule": "Umplanen",
                "Thumbnail image of ": "Vorschaubild von ",
                "1 Week - 1 Month": "1 Woche - 1 Monat",
                "6 Months": "6 Monate",
                "1 Year": "1 Jahr",
                "Action": "Aktion"
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
