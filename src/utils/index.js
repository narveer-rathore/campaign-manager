import moment from 'moment'
import 'moment/locale/de';
import i18n from '../i18n';

import { LANG_TO_LOCALE } from '../constants';

// Return localized moment object
export const localDate = (date = new moment()) => {
    const lang = i18n.language.split()[0];
    return moment(date).locale(LANG_TO_LOCALE[lang]);
};

// Convert currency from one format to another,
// assumes currency passed is in USD
export const formatCurrency = (value, format) => {
    switch(format) {
        case 'ger':
            const toEuro = (value * 0.84).toFixed(2);
            return `${toEuro} €`;
        default:
            return `$ ${value}`;
    }
}

export default {
    localDate,
    formatCurrency
}
