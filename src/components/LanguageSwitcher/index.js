import React from 'react';
import i18n from '../../i18n';

import './styles.scss';

function LanguageSelectPicker() {
    const LANG_MAPS = {
        "en": i18n.t("English"),
        "ger": i18n.t("German")
    }

    const code = i18n.language.split('-')[0] === 'en' ? 'ger' : 'en';

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <a title={i18n.t('Change Language')} href="/" onClick={() => changeLanguage(code)}>
            {`${i18n.t('Switch to')} ${LANG_MAPS[code]}`}
        </a>
    );
}

export default LanguageSelectPicker;

