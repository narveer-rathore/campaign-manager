import React from 'react';
import { withTranslation } from 'react-i18next';
import { default as classnames } from 'classnames';

import LanguageSelect from '../LanguageSwitcher';
import styles from './styles.module.scss';

import logo from '../../assets/images/logo.png';

const Header = ({ t }) => {

    return (
        <header className={styles.header}>
            <div className={classnames("content", styles.content)}>
                <a className={styles.logo} href="/">
                    <img src={logo} alt={t('BlueStacks Logo')}/>
                </a>
                <LanguageSelect />
            </div>
        </header>
    );
}

export default withTranslation()(Header);
