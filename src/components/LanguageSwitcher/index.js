import React from 'react';
import { withTranslation } from 'react-i18next';

import styles from './styles.module.scss';

import { LANG_MAPS } from '../../constants';

const LanguageSelectPicker = ({t, i18n}) => {

    // Get code of other language that is supported
    const otherLangCode = i18n.language.split('-')[0] === 'en' ? 'ger' : 'en';

    // Stop page navigation and change language
    const changeLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(otherLangCode)
    }

    return (
        <a
            className={styles.link}
            title={t('Change Language')}
            href={'/'}
            onClick={(e) => changeLanguage(e)}
        >
            {`${t('Switch to')} ${LANG_MAPS[otherLangCode]}`}
        </a>
    );
}

export default withTranslation()(LanguageSelectPicker);


