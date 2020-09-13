import React from 'react';
import { withTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const LanguageSelectPicker = ({t, i18n}) => {
    const LANG_MAPS = {
        "en": t("English"),
        "ger": t("German")
    }

    const otherLangCode = i18n.language.split('-')[0] === 'en' ? 'ger' : 'en';

    return (
        <a className={styles.link} title={t('Change Language')} href="/" onClick={() => i18n.changeLanguage(otherLangCode)}>
            {`${t('Switch to')} ${LANG_MAPS[otherLangCode]}`}
        </a>
    );
}

export default withTranslation()(LanguageSelectPicker);


