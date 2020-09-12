import React from 'react';
import logo from '../../assets/images/logo.png';
import { withTranslation } from 'react-i18next';

import LanguageSelect from '../LanguageSwitcher';

import './styles.scss';

const Header = ({ t }) => {
    return (
        <header className="header">
            <div className="content">
                <a className="logo" href="/">
                    <img src={logo} alt={t('BlueStacks Logo')}/>
                </a>
                <LanguageSelect />
            </div>
        </header>
    );
}

export default withTranslation()(Header);
