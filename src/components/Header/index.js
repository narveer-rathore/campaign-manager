import React from 'react';
import logo from '../../assets/images/logo.png';
import LanguageSelect from '../LanguageSwitcher';

import i18n from '../../i18n';
import './styles.scss';

function Header() {
    return (
        <header className="header">
            <div className="content">
                <a className="logo" href="/">
                    <img src={logo} alt={i18n.t('BlueStacks Logo')}/>
                </a>
                <LanguageSelect />
            </div>
        </header>
    );
}

export default Header;
