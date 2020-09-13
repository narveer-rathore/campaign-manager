import i18n from '../i18n';

export const LANG_MAPS = {
    "en": i18n.t("English"),
    "ger": i18n.t("German")
}

export const LANG_TO_LOCALE = {
    "ger": "de",
    "en": "en",
    "en-US": "en",
};

export const PRICING_OPTIONS = {
    "month_1": i18n.t("1 Week - 1 Month"),
    "month_6": i18n.t("6 Months"),
    "month_12": i18n.t("1 Year")
}

export const CAMPAIGNS_TABLE_COLUMS = [
    {
        id: "date",
        title: i18n.t("Date"),
    },
    {
        id: "campaign",
        title: i18n.t("Campaign")
    },
    {
        id: "view",
        title: i18n.t("View")
    },
    {
        id: "action",
        title: i18n.t("Action")
    }
]


export const CAMPAIGN_TABS = [
    {
        id: "upcoming",
        title: i18n.t("Upcoming Campaigns"),
    }, {
        id: "live",
        title: i18n.t("Live Campaigns"),
    }, {
        id: "past",
        title: i18n.t("Past Campaigns"),
    }
]

export const CAMPAIGN_ERROR_MESSAGES = {
    "upcoming": i18n.t('No upcoming campaigns'),
    "live": i18n.t('No live campaigns'),
    "past": i18n.t('No past campaigns'),
}

export default {
    LANG_TO_LOCALE,
    PRICING_OPTIONS,
    CAMPAIGNS_TABLE_COLUMS,
    CAMPAIGN_TABS,
    CAMPAIGN_ERROR_MESSAGES,
    LANG_MAPS
}
