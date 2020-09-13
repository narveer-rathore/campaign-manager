import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { withTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '300px'
    }
};

Modal.setAppElement('#root')

const AppModal = ({ children, isOpen, close, label, t }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={close}
            style={customStyles}
            contentLabel={label}
        >
            {children}
            <footer className={styles.footer}>
                <button onClick={close} className="primary-action">{t('Close')}</button>
            </footer>
        </Modal>
    );
};

AppModal.propTypes = {

};

export default withTranslation()(AppModal);
